import type {ReactNode} from 'react';
import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Native Learning',
    icon: '🤖',
    description: (
      <>
        Built-in RAG chatbot that understands the entire textbook. Highlight any text
        to get instant, context-aware explanations.
      </>
    ),
  },
  {
    title: 'Comprehensive Curriculum',
    icon: '📚',
    description: (
      <>
        A 13-week journey from Physical AI fundamentals to advanced Humanoid Robotics,
        curated for the next generation of engineers.
      </>
    ),
  },
  {
    title: 'Personalized Path',
    icon: '🎯',
    description: (
      <>
        Content that adapts to your background. Whether you&apos;re a software expert
        or a hardware enthusiast, the journey is yours.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('glass-card padding--lg', styles.featureCard)}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className="text--left">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
