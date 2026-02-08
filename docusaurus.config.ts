import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'An AI-Native Textbook Platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: '',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    () => ({
      name: 'custom-proxy-plugin',
      configureWebpack() {
        return {
          mergeStrategy: { 'devServer.proxy': 'replace' },
          devServer: {
            proxy: [
              {
                context: ['/api'],
                target: 'https://usmanameen-physical-ai-docusaurus-backend.hf.space',
                changeOrigin: true,
              },
            ],
          },
        };
      },
    }),
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/logo.svg',
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {to: '/signup', label: 'Sign Up', position: 'right', className: 'navbar-signup'},
        {to: '/login', label: 'Login', position: 'right', className: 'navbar-login'},
        {to: '#logout', label: 'Logout', position: 'right', className: 'navbar-logout'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Chapters',
              to: '/docs/chapter1',
            },
            {
              label: 'Weekly Breakdown',
              to: '/docs/intro#weekly-breakdown',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Documentation',
              href: 'https://docusaurus.io',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with ❤️ for the future of robotics.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
