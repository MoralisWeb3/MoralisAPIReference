// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Reference',
  tagline: 'Empowered Web3 Development',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          includeCurrentVersion: false,
          versions: {
            '1.0' : {
              banner: 'none'
            },
            '2.0' : {
              banner: 'unreleased'
            }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'API Reference',
        logo: {
          alt: 'Moralis Logo',
          src: 'img/moralislogo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/MoralisWeb3/Moralis-JS-SDK',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://moralis.io/mage',
            label: 'Discord',
            position: 'right',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/MoralisWeb3',
            position: 'right'
          },
          {
            label: 'Documentation',
            href: 'https://docs.moralis.io/',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'V1',
                to: '/docs/intro',
              },
              {
                label: 'V2 (In progress)',
                to: '/docs/2.0/intro'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/MoralisWeb3',
              },
              {
                label: 'Discord',
                href: 'https://moralis.io/mage/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MoralisWeb3',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Moralis Blog',
                href: 'https://moralis.io/blog/',
              },
            ],
          },
        ],
        copyright: `Moralis Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
