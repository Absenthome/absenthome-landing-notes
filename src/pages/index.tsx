import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import YouTubeVideo from '@site/src/components/YouTubeVideo';
import SubscribeBanner from '@site/src/components/SubscribeBanner';
import Heading from '@theme/Heading';
import youtubeVideos from '@site/src/data/youtube-videos.json';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Learn at Your<br />Own Pace
        </Heading>
        <p className="hero__subtitle">
          A friendly space to explore Salesforce, build smart homes, and contribute to open source—no pressure, just practical guides.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://youtube.com/@absenthome?sub_confirmation=1"
            target="_blank">
            Subscribe Free
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/intro">
            Explore Tutorials
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturedVideos(): ReactNode {
  const videos = youtubeVideos.videos;

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Latest Videos
        </Heading>
        {videos.length === 0 && (
          <div className={styles.emptyState}>
            <p>No videos yet - check back soon!</p>
          </div>
        )}
        {videos.length > 0 && (
          <div className={videos.length === 1 ? styles.videoGridSingle : styles.videoGrid}>
            {videos.map((video) => (
              <YouTubeVideo 
                key={video.id}
                videoId={video.id}
                title={video.title}
                description={video.description.slice(0, 100) + (video.description.length > 100 ? '...' : '')}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Tech tutorials, coding guides, and Salesforce development insights">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <FeaturedVideos />
        <div className="container">
          <SubscribeBanner />
        </div>
      </main>
    </Layout>
  );
}
