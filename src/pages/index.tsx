import type {ReactNode} from 'react';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('access_token'));
  }, []);

  return (
    <header className={styles.heroBanner}>
      <div className="container animate-fade-in-up">
        <Heading as="h1" className={styles.hero__title}>
          Master Physical AI &<br />Humanoid Robotics
        </Heading>
        <p className={styles.hero__subtitle}>
          The world&apos;s first AI-native textbook. Learn to build the future of embodied intelligence with an interactive AI tutor by your side.
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/docs/intro">
            Start Learning 🚀
          </Link>
          {!isLoggedIn ? (
            <Link
              className={clsx('button button--outline button--lg', styles.button)}
              style={{ color: 'white', borderColor: 'white' }}
              to="/signup">
              Join the Cohort
            </Link>
          ) : (
            <Link
              className={clsx('button button--outline button--lg', styles.button)}
              style={{ color: 'white', borderColor: 'white' }}
              to="/docs/chapter1">
              Continue Reading
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

function CourseOverview() {
  return (
    <section className={clsx(styles.section, styles.sectionDark)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>13 Weeks of Intensive Learning</Heading>
        <div className="row">
          <div className="col col--6">
            <div className="glass-card padding--lg margin-bottom--lg">
              <h3>⚡ Fundamentals of Embodiment</h3>
              <p>Explore the transition from Cyber AI to Physical AI. Understand why the world needs robots that can perceive and act.</p>
            </div>
            <div className="glass-card padding--lg margin-bottom--lg">
              <h3>🤖 Humanoid Architecture</h3>
              <p>Deep dive into the mechanical and electrical design of humanoid systems, from actuators to sensory feedback loops.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className="glass-card padding--lg margin-bottom--lg">
              <h3>🧠 Brain-Body Integration</h3>
              <p>Learn how Large Language Models (LLMs) and Vision-Language-Action (VLA) models are becoming the brains of modern robots.</p>
            </div>
            <div className="glass-card padding--lg margin-bottom--lg">
              <h3>🌍 Real-world Deployment</h3>
              <p>Master the challenges of sim-to-real transfer and deploying autonomous agents in unstructured human environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Designed for Every Background</Heading>
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding--md">
              <div style={{fontSize: '4rem'}}>💻</div>
              <h3>Software Engineers</h3>
              <p>Transition your coding skills into the physical world. Learn ROS2, control theory, and robot learning.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding--md">
              <div style={{fontSize: '4rem'}}>⚙️</div>
              <h3>Hardware Enthusiasts</h3>
              <p>Bring your designs to life. Integrate sophisticated AI brains into your mechanical creations.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding--md">
              <div style={{fontSize: '4rem'}}>🎓</div>
              <h3>Students & Researchers</h3>
              <p>Access the latest research in Embodied AI and Humanoid Robotics in a structured, easy-to-digest format.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatbotFeature() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={clsx('row', styles.alignCenter)}>
          <div className="col col--6">
            <div className="padding--lg">
              <Heading as="h2" style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
                Your Personal AI Tutor,<br />Available 24/7
              </Heading>
              <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
                Stuck on a complex concept? Just highlight the text and our built-in AI chatbot will provide instant clarity. Unlike generic AI, our tutor is trained specifically on this textbook&apos;s content, ensuring accurate and relevant answers every time.
              </p>
              <ul style={{fontSize: '1.1rem', marginTop: '1.5rem', listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem'}}>✅ <strong>Context-Aware:</strong> Knows exactly what you&apos;re reading.</li>
                <li style={{marginBottom: '0.5rem'}}>✅ <strong>Source-Grounded:</strong> Only answers from textbook content.</li>
                <li style={{marginBottom: '0.5rem'}}>✅ <strong>Instant Feedback:</strong> No more waiting for office hours.</li>
              </ul>
            </div>
          </div>
          <div className="col col--6 text--center">
            <div className={clsx('glass-card padding--xl', styles.chatbotGraphic)}>
              <div style={{fontSize: '8rem', filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))'}}>🤖</div>
              <div className="margin-top--md" style={{fontStyle: 'italic', opacity: 0.8}}>
                "How do actuators in the Unitree G1 compare to the Tesla Optimus?"
              </div>
              <div className="margin-top--lg" style={{textAlign: 'left', padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--ifm-color-primary)'}}>
                <strong>AI Tutor:</strong> According to Chapter 4, the Unitree G1 uses high-torque density motors specifically optimized for rapid dynamic motions, whereas the Optimus...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modern, AI-native textbook platform for Physical AI and Humanoid Robotics.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ChatbotFeature />
        <CourseOverview />
        <AudienceSection />
        <section className={clsx(styles.section, 'text--center')}>
          <div className="container">
            <div className="glass-card padding--xl" style={{background: 'var(--ifm-color-primary)', color: 'white'}}>
              <Heading as="h2">Ready to Build the Future?</Heading>
              <p style={{fontSize: '1.25rem', marginBottom: '2rem'}}>Join thousands of learners in the most advanced robotics course available today.</p>
              <Link
                className="button button--secondary button--lg"
                to="/signup">
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
