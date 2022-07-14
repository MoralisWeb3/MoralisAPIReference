// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Reference',
  tagline: 'Empowered Web3 Development',
  url: 'https://reference.moralis.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MoralisWeb3', // Usually your GitHub org/user name.
  projectName: 'Moralis', // Usually your repo name. 

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    // [
    //   'docusaurus-plugin-typedoc',

    //   // Plugin / TypeDoc options
    //   {
    //     id: 'core',
    //     entryPoints: ['/Users/mohammedabdulmalik/Downloads/All-regarding-dev/Ethereum-dev/Moralis-JS-SDK/packages/core/src/index.ts'],
    //     tsconfig: '/Users/mohammedabdulmalik/Downloads/All-regarding-dev/Ethereum-dev/Moralis-JS-SDK/packages/core/tsconfig.json',
    //     excludePrivate : true,
    //     //entryPointStrategy: 'packages',
    //     sidebar: {
    //       fullNames: true,
    //     },
    //     out: 'core',
    //   },
    // ],
  ],

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

  //themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'API Reference',
        logo: {
          alt: 'Moralis Logo',
          src: 'img/logo.svg',
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
      algolia: {
        // The application ID provided by Algolia
        appId: '1GCIS6JN93',
  
        // Public API key: it is safe to commit it
        apiKey: '94cb19f5cce2dceebf34ac943cbc3c22',
  
        indexName: 'Moralis',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        //searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        //searchPagePath: 'search',
  
        //... other Algolia params
        
        schedule: 'every 1 day at 11:22 pm',
        
      },
    }),
};

module.exports = config;
