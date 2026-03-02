# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

### YouTube Integration Setup

To enable automatic loading of recent videos from your channel:

1. Get your YouTube API key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Enable "YouTube Data API v3"
3. Create a copy of `.env.example` called `.env.local`
4. Add your API key:
   ```
   DOCUSAURUS_YOUTUBE_API_KEY=your_api_key_here
   ```

**How it works:**
- Videos are fetched **at build/start time** using the Node.js script
- The API key is used server-side only and never exposed to users
- Videos are saved as JSON and pre-rendered into the site
- Users never see the API key in their browser or network requests

**Note:** `.env.local` is in `.gitignore` and won't be committed to git for security.

## Local Development

```bash
yarn start
```

The fetch script runs automatically before the dev server starts. Videos will be loaded from your channel.

## Build

```bash
yarn build
```

The fetch script runs automatically, fetching your latest videos and building the site with them.

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
