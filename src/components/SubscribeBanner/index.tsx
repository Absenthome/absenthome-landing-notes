import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function SubscribeBanner(): ReactNode {
  return (
    <div className={styles.subscribeBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <h3>Ready to level up?</h3>
          <p>Join thousands of developers mastering their craft. New tutorials every week.</p>
        </div>
        <Link
          className="button button--primary button--lg"
          href="https://youtube.com/@absenthome?sub_confirmation=1"
          target="_blank">
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}
