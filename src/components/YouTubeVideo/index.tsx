import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
}

export default function YouTubeVideo({ videoId, title, description }: YouTubeVideoProps): ReactNode {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}>{title}</h3>
        {description && <p className={styles.videoDescription}>{description}</p>}
      </div>
    </div>
  );
}
