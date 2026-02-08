import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';
import clsx from 'clsx';
import { getApiUrl } from '../utils/api';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface ChatbotProps {
  isVisible?: boolean; // Now optional as we might manage visibility internally
  selectedText?: string;
  onClose?: () => void;
}

function Chatbot({ isVisible: externalVisible, selectedText: externalText, onClose }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [savedDraft, setSavedDraft] = useState('');
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Sync with external props if provided
  useEffect(() => {
    if (externalVisible !== undefined) {
      setIsOpen(externalVisible);
    }
  }, [externalVisible]);

  useEffect(() => {
    if (externalText) {
      setInputValue(externalText);
      setIsOpen(true);
    }
  }, [externalText]);

  // Global selection listener
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      // Don't trigger if clicking inside the chatbot
      if (chatWindowRef.current?.contains(e.target as Node)) {
        return;
      }

      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text && text.length > 2) {
        if (!isSelectionActive) {
          setSavedDraft(inputValue);
          setIsSelectionActive(true);
        }
        setInputValue(text);
        setIsOpen(true);
      } else if (isSelectionActive) {
        setInputValue(savedDraft);
        setIsSelectionActive(false);
        setSavedDraft('');
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [inputValue, isSelectionActive, savedDraft]);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 'welcome',
        type: 'bot',
        text: 'Hello! I am your AI assistant. Select any text in the documentation or ask me anything directly!',
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(getApiUrl('/api/chat'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            question: text
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const data = await response.json();
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: data.answer,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: "I encountered an error. Please check if the backend is running.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Launcher Bubble */}
      {!isOpen && (
        <button 
          className={styles.launcher} 
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className={clsx(styles.chatbotWindow, 'animate-fade-in-up')}
        >
          <div className={styles.chatbotHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>AI</div>
              <div>
                <div className={styles.botName}>Textbook Assistant</div>
                <div className={styles.status}>Online</div>
              </div>
            </div>
            <button onClick={handleClose} className={styles.closeButton} aria-label="Close chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((msg) => (
              <div key={msg.id} className={clsx(styles.messageWrapper, styles[msg.type])}>
                <div className={styles.messageBubble}>
                  {msg.text}
                </div>
                <div className={styles.timestamp}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={clsx(styles.messageWrapper, styles.bot)}>
                <div className={clsx(styles.messageBubble, styles.loading)}>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} 
            className={styles.inputArea}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className={styles.inputField}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || !inputValue.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
