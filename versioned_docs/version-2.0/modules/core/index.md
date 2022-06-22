---
id: "index"
title: "Core Module"
sidebar_label: "Core"
sidebar_position: 1
custom_edit_url: null
toc_max_heading_level: 4
---

# Core

```js
Moralis.Core.xxx()
```

#### modules

Remove Modules 

```js
Moralis.Core.modules.remove([module_name])
```

<details open><summary>Options</summary>

- `Module`(required): server url.

</details>


#### config

Set the Moralis Server from multiple servers

```js
Moralis.Core.config.set(key, value);
```

<details open><summary>Options</summary>

- `key`(required): "serverUrl"
- `value`(required): server url

</details>

Get the name of the Moralis server

```js
Moralis.Core.config.get(key);
```

<details open><summary>Options</summary>

- `key`(required): server url.

</details>


*** Output ***

```
read config: https://c2qemm0jqfwh.moralis.io:2053/server
```

#### logger

Send request to moralis server

```js
core.logger.verbose('key', 'value')
```
<details open><summary>Options</summary>

- `key`(required): server url.
- `value`(required): {(url, method, body)}.

</details>

#### registerModules

```js
Moralis.Core.registerModules([module_name])
```

<details open><summary>Options</summary>

- `module_name`(required): string; Name of the module.

</details>

**Example Result in data module of return object**

```js
0: MoralisEvmApi {emitter: EventEmitter, name: 'evmApi', type: 'api', core: MoralisCore, logger: Logger, …}
1: MoralisEvm {emitter: EventEmitter, name: 'evm', type: 'network', core: MoralisCore, logger: Logger, …}
length: 2
```

#### registerModule

Register Module

```js
Moralis.Core.registerModule(module_name)
```

<details open><summary>Options</summary>

- `module_name`(required): string; Name of the module

</details>

**Example Result in data module of return object**

```js
0: MoralisEvmApi {emitter: EventEmitter, name: 'evmApi', type: 'api', core: MoralisCore, logger: Logger, …}
1: MoralisEvm {emitter: EventEmitter, name: 'evm', type: 'network', core: MoralisCore, logger: Logger, …}
length: 2
```

#### start

After registering module we need to start

```js
Moralis.Core.start(apiKey)
```

<details open><summary>Options</summary>

- `apiKey`(required): Moralis server API key.

</details>
