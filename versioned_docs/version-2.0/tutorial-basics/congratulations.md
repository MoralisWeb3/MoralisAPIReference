---
sidebar_position: 6
---

# Intorduction!

**Features**:

- **Connect to EVM** via MetaMask, WalletConnect, MagicLink and many more connectors (or create your own connetor)
- **Connect to Moralis** via other networks as Solana, Polkadot, Elrond and more
- **Authenticate** to Moralis via connection methods specified above
- **Evm Utilities** for transfers, contract interactions and other on-chain methods for the supported networks (and support for other networks as Solana, Polkadot, Elrond and more)
- Interaction with the **Moralis server** like: database queries, handling user sessions, calling cloud-functions etc.
- Make **Evm api** and **Solana api** calls
- **Modular** package: include only what you need
- Fully **Typescript** ready out-of-the box

... and much more. Check the [official Moralis docs](https://docs.moralis.io/) for more details.

# 🚀 Quick start

If you're new to Moralis, check the [quickstart guide in the official docs](https://docs.moralis.io/moralis-dapp/getting-started) on how to get started.

If you're already familiar with Moralis and have your server set up. Then follow along to connect your SDK:

#### 1. Install Moralis

#### Package manager

The easiest way to integrate the Moralis SDK into your JavaScript project is through the npm module.

Install the package via `npm`:

```shell
npm install moralis
```

or `yarn`

```shell
yarn add moralis
```

#### Browser (UMD)

If you want to use a pre-compiled file from unpkg:

TODO

#### Browser (ESM)

Or if you prefer the more modern EsModule build:

TODO

#### 2. Initialise Moralis

After your dependency is added, you simply need to initialize moralis via the `start` method:

```javascript
import { Moralis } from 'moralis';

Moralis.start({
  serverUrl: '<YOUR_SERVER_URL>',
  appId: '<YOUR_APP_ID>',
});
```

After that you can use any Moralis functionalites via, as described in our [extensive docs](https://docs.moralis.io)

# ⭐️ Star us

If this JS SDK helps you build your dapps faster - please star this project, every star makes us very happy!

# 🤝 Need help

If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Forum link](https://forum.moralis.io). The best thing about this SDK is the super active community ready to help at any time! We help each other.


# ⚙️ Configuration

When calling `Moralis.start`, you can include a configuration object.

# 🥷 Support for NodeJs (backend) server

TODO

# ⚛️ Support for react-native

TODO

# 👩‍🔬 Advanced setup

It's possible to install all functionalities of Moralis by installing `moralis` as a dependency. But, you may choose to only install certain modules (as listed below).

#### 1. Install the dependencies

Instead of installing `moralis` you can need to install the packages that you want to use. You always need to install the `@moralis/core` package. For example:

```shell
yarn add @moralis/core @moralis/evm @moralis/evm-api @moralis/evm-walletconnect-connector
```

Then at the top of your code (before any interaction with Moralis), you need to register the modules to the core package

```javascript
import MoralisCore from '@moralis/core';
import Server from '@moralis/server';
import EvmApi from '@moralis/evm-api';
import Evm from '@moralis/evm';
import WalletConnectConnector from '@moralis/evm-walletconnect-connector';

// Register all imported modules to the @moralis/core module
MoralisCore.registerModules({
  // Add any network modules
  networks: [Evm],
  // Add any api modules
  networks: [EvmApi],
  // Add any other modules
  modules: [Server],
});

// Add any additional connectors for the Evm network
Evm.wallet.register(WalletConnectConnector);
```

Then, initialize the app the same way as when using the umbrella `moralis` package. You only need to provide configation that is required by the packages. So if you don't include the server package, then you might not need to include the serverUrl and appId.

```javascript
MoralisCore.start({
  serverUrl: '<YOUR_SERVER_URL>',
  appId: '<YOUR_APP_ID>',
  // ...and any other configuration
});
```

Now you can use any functionality from the installed modules. The only difference is that you need to call in your code:

```javascript
import Evm from '@moralis/evm';

Evm.connect();
```

Instead of

```javascript
import Moralis from 'moralis';

Moralis.Evm.connect();
```

Of course you are free to combine the modules in a single object, and use that in your dapp.

```javascript
// moralis.ts
import Evm from '@moralis/evm';
import Server from '@moralis/server';

export const Moralis = {
  Evm,
  Server,
};

// app.ts
import { Moralis } from './moralis/';

Moralis.Evm.connect();
```

# 📦 Packages

## Umbrella package

| package | Version | Changelog | Description                                                      |
| ------- | ------- | --------- | ---------------------------------------------------------------- |
| moralis | TODO    | TODO      | Umbrella package that includes all packages and initialises them |

## Core module

The core module is required in all applications. It will handle global dependencies and communications between other packages.

| package                                    | Version | Changelog | Description                                                                          |
| ------------------------------------------ | ------- | --------- | ------------------------------------------------------------------------------------ |
| [@moralis/core] | TODO    | TODO      | Core logic, responsible for core logic and sharing state and events between packages |

## Main modules

| package                                          | Version | Changelog | Description                                                         |
| ------------------------------------------------ | ------- | --------- | ------------------------------------------------------------------- |
| [@moralis/server]  | TODO    | TODO      | Connecting and interaction with your moralis server instance server |
| [@moralis/plugins]| TODO    | TODO      |                                                                     |

## API modules

These are packages that wrap around the Moralis apis for easy use. You can call to any endpoint with a single function call. These modules will also wrap the returned data in Moralis datatypes, to ensure consistent data accross all modules.

| package                                          | Version | Changelog | Description |
| ------------------------------------------------ | ------- | --------- | ----------- |
| [@moralis/evm-api] | TODO    | TODO      |             |
| [@moralis/sol-api] | TODO    | TODO      |             |

## Network modules

| package                                  | Version | Changelog | Description                                       |
| ---------------------------------------- | ------- | --------- | ------------------------------------------------- |
| [@moralis/evm] | TODO    | TODO      | All logic regarding connecting to EVM networks    |
| [@moralis/sol]| TODO    | TODO      | All logic regarding connecting to Solana networks |

## Connectors

Connectors are modules that allow access to on-chain activities. These are required to establish a connection with any network package.

| package                                                                                               | Version | Changelog | Description                                              |
| ----------------------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------- |
| [@moralis/evm-connector-utils]                  | TODO    | TODO      | Utilities for EVM connectors                             |
| [@moralis/evm-metamask-connector]            | TODO    | TODO      | Connector to connect to an EVM network via Metamask      |
| [@moralis/evm-wallet-connect-connector] | TODO    | TODO      | Connector to connect to an EVM network via Walletconnect |
| @moralis/sol-phantom                                                                                  | TODO    | TODO      | TODO                                                     |

## Other

| package        | Version | Changelog | Description |
| -------------- | ------- | --------- | ----------- |
| @moralis/utils | TODO    | TODO      |             |

# 🧙‍♂️ Community

- [Discord](https://discord.gg/moralis)
- [Forum](https://forum.moralis.io)