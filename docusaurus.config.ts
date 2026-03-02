import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Absenthome',
  tagline: 'Salesforce, home automation, open source software—all in one place',
  favicon: 'img/favicon.ico',

  url: 'https://docs.absenthome.com',
  baseUrl: '/',

  organizationName: 'absenthome',
  projectName: 'absenthome-landing-notes',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/absenthome/absenthome-landing-notes/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/absenthome/absenthome-landing-notes/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/socialCard.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Absenthome',
      logo: {
        alt: 'Absenthome Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Video Notes',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://youtube.com/@absenthome',
          label: 'YouTube',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Video Notes',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/@absenthome',
            },
            {
              label: 'Subscribe',
              href: 'https://youtube.com/@absenthome?sub_confirmation=1',
            },
          ],
        },
        {
          title: 'Series',
          items: [
            {
              label: 'Salesforce Tutorials',
              to: '/docs/youtube-notes/salesforce-series/salesforce-cheat-sheet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Absenthome. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
