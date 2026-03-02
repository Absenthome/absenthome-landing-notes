import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Salesforce Development',
    description: (
      <>
        Apex, Lightning Components, and enterprise solutions. Master the skills 
        that powers millions of businesses worldwide.
      </>
    ),
  },
  {
    title: 'Home Automation',
    description: (
      <>
        Smart home setups, IoT projects, and practical automation. 
        Build the connected home of your dreams.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        Contribute to the community—guides on popular projects and best practices. 
        Code for a better future.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
