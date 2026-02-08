import React, { useEffect } from 'react';
import Chatbot from '../components/Chatbot';

// The Root component wraps the entire Docusaurus app.
// It's the perfect place for global logic.
export default function Root({children}) {
  useEffect(() => {
    // Scroll listener for navbar animations
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.body.classList.add('navbar-scrolled');
      } else {
        document.body.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Brute force update function
    const updateAuthUI = () => {
      const token = localStorage.getItem('access_token');
      const isLoggedIn = !!token;
      
      if (isLoggedIn) {
        document.body.classList.add('is-logged-in');
      } else {
        document.body.classList.remove('is-logged-in');
      }

      // Find all potential auth elements
      const elements = {
        signup: document.querySelectorAll('.navbar-signup'),
        login: document.querySelectorAll('.navbar-login'),
        logout: document.querySelectorAll('.navbar-logout')
      };

      // Apply styles to the elements or their parent <li>
      elements.signup.forEach(el => {
        const target = el.closest('li') || el;
        if (el.closest('.navbar-sidebar')) {
          (target as HTMLElement).style.setProperty('display', 'none', 'important');
          return;
        }
        (target as HTMLElement).style.setProperty('display', isLoggedIn ? 'none' : 'inline-flex', 'important');
      });
      elements.login.forEach(el => {
        const target = el.closest('li') || el;
        if (el.closest('.navbar-sidebar')) {
          (target as HTMLElement).style.setProperty('display', 'none', 'important');
          return;
        }
        (target as HTMLElement).style.setProperty('display', isLoggedIn ? 'none' : 'inline-flex', 'important');
      });
      elements.logout.forEach(el => {
        const target = el.closest('li') || el;
        if (el.closest('.navbar-sidebar')) {
          (target as HTMLElement).style.setProperty('display', 'none', 'important');
          return;
        }
        (target as HTMLElement).style.setProperty('display', isLoggedIn ? 'inline-flex' : 'none', 'important');
      });
    };

    // Run immediately
    updateAuthUI();
    
    // Run periodically to catch SPA re-renders and navigation
    const interval = setInterval(updateAuthUI, 500);
    
    // Listen for storage changes
    window.addEventListener('storage', updateAuthUI);
    window.addEventListener('auth-change', updateAuthUI);

    // Handle logout click
    const handleLogout = (e) => {
      const logoutLink = e.target.closest('.navbar-logout') || (e.target.tagName === 'A' && e.target.getAttribute('href') === '#logout');
      if (logoutLink) {
        e.preventDefault();
        localStorage.removeItem('access_token');
        window.dispatchEvent(new Event('auth-change'));
        window.location.href = '/';
      }
    };
    document.addEventListener('click', handleLogout);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', updateAuthUI);
      window.removeEventListener('auth-change', updateAuthUI);
      document.removeEventListener('click', handleLogout);
    };
  }, []);

  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}
