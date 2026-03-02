require('dotenv').config({ path: '.env.local' });

const fs = require('fs');
const path = require('path');

const YOUTUBE_API_KEY = process.env.DOCUSAURUS_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = 'absenthome';

if (!YOUTUBE_API_KEY) {
  console.warn('YouTube API key not set. Skipping fetch.');
  const emptyData = { videos: [] };
  const outputPath = path.join(__dirname, '../src/data/youtube-videos.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(emptyData, null, 2));
  process.exit(0);
}

async function fetchYouTubeVideos() {
  try {
    console.log('Fetching videos...');

    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${YOUTUBE_API_KEY}`
    );

    if (!channelRes.ok) {
      throw new Error(channelRes.statusText);
    }

    const channelData = await channelRes.json();

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel not found');
    }

    const channelId = channelData.items[0].id;

    const uploadsPlaylistId = channelId.replace('UC', 'UU');

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${YOUTUBE_API_KEY}`
    );

    if (!videosRes.ok) {
      throw new Error(videosRes.statusText);
    }

    const videosData = await videosRes.json();

    if (!videosData.items) {
      const emptyData = { videos: [] };
      const outputPath = path.join(__dirname, '../src/data/youtube-videos.json');
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(emptyData, null, 2));
      return;
    }

    const videos = videosData.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails?.maxres?.url ||
        item.snippet.thumbnails?.high?.url ||
        item.snippet.thumbnails?.medium?.url ||
        '',
      publishedAt: item.snippet.publishedAt,
    }));

    const outputPath = path.join(__dirname, '../src/data/youtube-videos.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify({ videos }, null, 2));

    console.log(`Fetched ${videos.length} video(s)`);
  } catch (error) {
    console.error('Error:', error.message);

    const emptyData = { videos: [] };
    const outputPath = path.join(__dirname, '../src/data/youtube-videos.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(emptyData, null, 2));

    process.exit(1);
  }
}

fetchYouTubeVideos();
