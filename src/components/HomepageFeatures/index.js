import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Riskbase?',
    description: (
      <>
      RiskBase can help your organisation meet the requirements of the Fire Safety Act and Fire Safety England Regulations.
Asset and Task Management. Assessments and Inspections. Resident Engagement.
We can help you navigate what’s now a complex regulatory landscape.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('centered-container')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
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
