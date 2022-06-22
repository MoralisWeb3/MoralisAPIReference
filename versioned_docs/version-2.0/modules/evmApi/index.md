---
id: "index"
title: "Evm Api Module"
sidebar_label: "EVM API"
sidebar_position: 0
custom_edit_url: null
toc_max_heading_level: 4
---

Calls the Moralis API endpoint for results. You can test the current API here - [Moralis API](../../moralis-web3api/moralisweb3.mdx)


```js
Moralis.EvmApi.native.xxx()
Moralis.EvmApi.account.xxx()
```


### `native`

#### runContractFunction

Runs a given function of a contract ABI and returns read-only data (asynchronous).

```js
Moralis.EvmApi.native.runContractFunction()
```
<details open><summary>Options</summary>

- `address`(required)
- `functionName`(required)
- `chain`(optional)
- `abi`(required)
- `params`(optional)
- `subdomain`(optional) - The subdomain of the moralis server to use (**Only use when selecting local devchain as chain**)
- `providerUrl`(optional) - web3 provider url to user when using **local dev chain**

</details>

#### getBlock
Returns block details on an EVM Blockchain

```js
Moralis.EvmApi.native.getBlock()
```
<details open><summary>Options</summary>

- `Block number or block hash`(required)

</details>

**Example Result in data module of return object:**

```js
base_fee_per_gas: "0"
difficulty: "125493..."
extra_data: "0xd78...7578"
gas_limit: "3141592"
gas_used: "50244"
hash: "0x8e38....681e"
logs_bloom: "0x0....000"
miner: "0x2a65ac...226"
nonce: "0xcd4...9015"
number: "1000000"
parent_hash: "0xb....94f7b38"
receipts_root: "0x20e...2333"
sha3_uncles: "0x1dcc4de8...9347"
size: "768"
state_root: "0x0e066f3c2....36f34"
timestamp: "2016-02-13T22:54:13.000Z"
total_difficulty: "7135202464334937706"
transaction_count: "2"
transactions: Array[{"tranx details"}]
transactions_root: "0x65.....5cb3"
```

#### getDateToBlock

Retrieve the closest block of the provided date (asynchronous).

```js
Moralis.EvmApi.native.getDateToBlock()
```
<details open><summary>Options</summary>

- `date`(required): Unix date in miliseconds or a datestring (any format that is accepted by momentjs)
- `chain` (optional): The blockchain to get data from. Valid values are listed on Supported Chains.
- `providerUrl`(optional):web3 provider url to user when using **local dev chain**

</details>

**Example Result in data module of return object:**

```js
block: 133...
date: "0000-00-00T00:00:00+00:00"
timestamp: 16...65
```


#### getTransaction

Get the transaction by transaction hash. Returns a transaction object (asynchronous).

```js
Moralis.EvmApi.native.getTransaction()
```
<details open><summary>Options</summary>

- `transaction_hash`(required): string; The transaction hash
- `chain` (optional): The blockchain to get data from. Valid values are listed on Supported Chains.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**

</details>

#### getLogsByAddress

Gets the logs from an address

```js
Moralis.EvmApi.native.getLogsByAddress()
```
<details open><summary>Options</summary>

- `address`(required): string.
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `providerUrl`(optional) - web3 provider url to user when using **local dev chain**
- `from_block`(optional): number; The minimum block number from where to get the logs. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The date from where to get the logs (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `from_date` (optional): string; Get the logs to this date (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get the logs to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `topic0` (optional): string; topic0
- `topic1` (optional): string; topic1
- `topic2` (optional): string; topic2
- `topic3` (optional): string; topic3
- `cursor` (optional): string; 
- `limit` (optional): number;

</details>

**Example Result in data module of return object:**

```js
cursor: "eyJhb...XVCJ9"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 861652
```

#### getNFTTransfersByBlock
Gets NFT transfers by block number or block hash

```js
Moralis.EvmApi.native.getNFTTransfersByBlock()
```
<details open><summary>Options</summary>

- `block_number_or_hash`(required): string; The block hash or block number
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `offset` (optional): number; 
- `cursor` (optional): number;
- `limit` (optional): number;

</details>

**Example Result in data module of return object:**
```js
block_exists: true
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0Ijo1MDAsImJsb2NrX2hhc2giOiIweDliNTU5YWVmN2VhODU4NjA4YzJlNTU0MjQ2ZmU0YTI0Mjg3ZTdhZWViOTc2ODQ4ZGYyYjlhMjUzMWY0YjkxNzEiLCJ3aGVyZSI6e30sInBhZ2UiOjEsImtleSI6IjEyMzg2Nzg4LjE4MS4yMzcuMCIsInRvdGFsIjozLCJpYXQiOjE2NTU0NzkxMTZ9.UG28kz13iOOCp8-cib8ZoS7TNgaIocQGZH-UWpWq-Zc"
index_complete: true
page: 0
page_size: 500
result: (3) [{…}, {…}, {…}]
total: 3
```
#### getContractEvents

Gets events in descending order based on block number

```js
Moralis.EvmApi.native.getContractEvents()
```
<details open><summary>Options</summary>

- `address`(required): string.
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `from_block`(optional): number; The minimum block number from where to get the logs. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The date from where to get the logs (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `from_date` (optional): string; Get the logs to this date (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `topic` (optional): string; 
- `offset` (optional): number; 
- `limit` (optional): number;

</details>

### `account`
#### getTokenBalances

Gets token balances for a specific address

```js
Moralis.EvmApi.account.getTokenBalances()
```

<details open><summary>Options</summary>

- `address`(required): string.
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `to_block`(optional): number; The block number on which the balances should be checked.
- `token_addresses`(optional): string[];

</details>

#### getNativeBalance

Gets native balance for a specific address

```js
Moralis.EvmApi.account.getNativeBalance()
```

<details open><summary>Options</summary>

- `address`(required): string; The address for which the native balance will be checked
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `to_block`(optional): number; The block number on which the balances should be checked.

</details>

**Example Result in data module of return object**

```js
balance: "39600000000000000"
```

#### getNFTTransfers

Gets the transfers of the tokens matching the given parameters

```js
Moralis.EvmApi.account.getNFTTransfers()
```

<details open><summary>Options</summary>

- `address`(required): string; The sender or recepient of the transfer
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `direction`(optional): "both" | "to" | "from";
- `limit`(optional): number; 
- `cursor`(optional): string; The cursor returned in the last response (for getting the next page)

</details>

**Example Result in data module of return object**

```js
block_exists: true
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjoxMDAsIndoZXJlIjp7fSwiZnJvbV9hZGRyZXNzIjoiMHg3NWUzZTljOTIxNjJlNjIwMDA0MjVjOTg3Njk5NjVhNzZjMmUzODdhIiwidG9fYWRkcmVzcyI6IjB4NzVlM2U5YzkyMTYyZTYyMDAwNDI1Yzk4NzY5OTY1YTc2YzJlMzg3YSIsInBhZ2UiOjEsImtleSI6IjE0MDg5ODIwLjY0LjEyMi4wIiwidG90YWwiOjEzMCwiaWF0IjoxNjU1NDg1NTc1fQ.WsowyICDUOZjJDY5rfkkL4S78BovQ_0GngK6Qzs0tAU"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 130
```

#### getTokenTransfers

Gets ERC20 token transactions in descending order based on block number

```js
Moralis.EvmApi.account.getTokenTransfers()
```

<details open><summary>Options</summary>

- `address`(required): string.
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `from_block`(optional): number; The minimum block number from where to get the transactions. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_date` (optional): string; The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): number; 
- `cursor` (optional): string;
- `limit` (optional): number;

</details>

**Example Result in data module of return object**

```js
cursor: null
page: 0
page_size: 100
result: (46) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 46
```

#### getTransactions

```js
Moralis.EvmApi.account.getTransactions()
```
<details open><summary>Options</summary>

- `address`(required): string.
- `chain`(optional): The chain to query.
- `subdomain`(optional): string; The subdomain of the moralis server to use **(Only use when selecting local devchain as chain)**
- `from_block`(optional): number; The minimum block number from where to get the transactions. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_date` (optional): string; The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): number; 
- `cursor` (optional): unknown; The cursor returned in the last response (for getting the next page) 
- `limit` (optional): number;

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHg3ZGUzMDg1YjMxOTBiM2E3ODc4MjJlZTE2ZjIzYmUwMTBmNWY4Njg2IiwiY2hhaW4iOiIweDEiLCJ0b19ibG9jayI6IjE0MjcyMTc1IiwiYmxvY2tfb2Zmc2V0IjoxLCJ0b3RhbCI6NDA2LCJwYWdlIjoxLCJsaW1pdCI6MTAwLCJvZmZzZXQiOjAsImlhdCI6MTY1NTQ4NjI1MH0.S3WRQ-HcUTLcpsSU1wu0uGc80m2O60_rPoRZM3Tdu_k"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 406
```

#### getNFTs

Gets NFTs owned by the given address
* The response will include status [SYNCED/SYNCING] based on the contracts being indexed.
* Use the token_address param to get results for a specific contract only
* Note results will include all indexed NFTs
* Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested


```js
Moralis.EvmApi.account.getNFTs()
```

<details open><summary>Options</summary>

- `address`(required): string.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `limit`(optional): number; 
- `token_addresses`(optional): string[];
- `cursor`(optional): string;

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJvd25lcl9vZiI6IjB4NzVlM2U5YzkyMTYyZTYyMDAwNDI1Yzk4NzY5OTY1YTc2YzJlMzg3YSJ9LCJsaW1pdCI6MTAwLCJvZmZzZXQiOjAsIm9yZGVyIjpbWyJ0cmFuc2Zlcl9pbmRleCIsIkRFU0MiXV0sInBhZ2UiOjEsImtleSI6IjE0MDg3MjU3LjIzMy4zOTEuMCIsInRvdGFsIjoxMTUsImlhdCI6MTY1NTQ4NjQyOH0.Pp45XLCq4kEe4U3Jpymqr546NXnMrf21IFjEI4GJ9EE"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
status: "SYNCED"
total: 115
```


#### getNFTsForContract

Gets NFTs owned by the given address
   * Use the token_address param to get results for a specific contract only
   * Note results will include all indexed NFTs
   * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested

```js
Moralis.EvmApi.account.getNFTsForContract()
```

<details open><summary>Options</summary>

- `address`(required): string.
- `token_address`(required): string.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `limit`(optional): number; 
- `cursor`(optional): string;

</details>

**Example Result in data module of return object**

```js
cursor: ""
page: 0
page_size: 100
result: []
status: "SYNCED"
total: 0
```

### `resolve`
#### resolveDomain

Resolves an Unstoppable domain and returns the address

```js
Moralis.EvmApi.resolve.resolveDomain()
```

<details open><summary>Options</summary>

- `domain`(required): string;
- `currency`(optional): "eth" | "0x1"; The currency to query

</details>

**Example Result in data module of return object**

```js
address: "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
```

#### resolveAddress

Resolves an ETH address and find the ENS name

```js
Moralis.EvmApi.resolve.resolveAddress()
```

<details open><summary>Options</summary>

- `address`(required): string; The address to be resolved.

</details>

**Example Result in data module of return object**

```js
name: "vitalik.eth"
```

### `defi`
#### getPairReserves

Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.

```js
Moralis.EvmApi.defi.getPairReserves()
```

<details open><summary>Options</summary>

- `pair_address`(required): string; Liquidity pair address
- `chain`(optional): The chain to query.
- `providerUrl`(optional) - web3 provider url to user when using **local dev chain**
- `to_block` (optional): string; To get the reserves at this block number.
- `to_date` (optional): string; Get the reserves to this date (any format that is accepted by momentjs).Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.

</details>

**Example Result in data module of return object**

```js
reserve0: "173021217577948615345141"
reserve1: "1028820680475863522943"
```

#### getPairAddress

Fetches and returns pair data of the provided token0+token1 combination.
The token0 and token1 options are interchangable (ie. there is no different outcome in "token0=WETH and token1=USDT" or "token0=USDT and token1=WETH")

```js
Moralis.EvmApi.defi.getPairAddress()
```

<details open><summary>Options</summary>

- `token0_address`(required): string; Token0 address.
- `token1_address`(required): string; Token1 address.
- `exchange` (required): "uniswapv2"| "uniswapv3" | "sushiswapv2" | "pancakeswapv2" | "pancakeswapv1" | "quickswap";
- `chain`(optional): The chain to query.
- `to_block` (optional): string; To get the reserves at this block number.
- `to_date` (optional): string; Get the reserves to this date (any format that is accepted by momentjs).Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.

</details>

**Example Result in data module of return object**

```js
pairAddress: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
token0: {address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', name: 'Wrapped BNB', symbol: 'WBNB', logo: null, logo_hash: null, …}
token1: {address: '0xe9e7cea3dedca5984780bafc599bd69add087d56', name: 'BUSD Token', symbol: 'BUSD', logo: null, logo_hash: null, …}
```

### `token`
#### reSyncMetadata
 ReSync the metadata for an NFT
   * The metadata(default) flag will request a the NFT's metadata from the already existing token_uri
   * The uri flag will fetch the latest token_uri from the given NFT address. In sync mode the metadata will also be fetched
   * The sync mode will make the endpoint synchronous so it will wait for the task to be completed before responding
   * The async mode(default) will make the endpoint asynchronous so we will wait for the task to be completed before responding
   
```js
Moralis.EvmApi.token.reSyncMetadata()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `token_id`(required): string; The id of the token.
- `chain`(optional): The chain to query.
- `flag` (optional): "uri" | "metadata";
- `mode` (optional): "async" | "sync";

</details>   

#### getTokenPrice

Returns the price nominated in the native token and usd for a given token contract address.
   
```js
Moralis.EvmApi.token.getTokenPrice()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `providerUrl`(optional) - web3 provider url to user when using **local dev chain**
- `exchange` (optional): string;
- `to_block` (optional): number;

</details>


#### getTokenAllowance

Returns the price nominated in the native token and usd for a given token contract address.
   
```js
Moralis.EvmApi.token.getTokenAllowance()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `providerUrl`(optional) - web3 provider url to user when using **local dev chain**
- `owner_address` (optional): string; The address of the token owner.
- `spender_address` (optional): number; The address of the token spender.

</details>

#### getContractNFTTransfers

Gets the transfers of the tokens matching the given parameters

```js
Moralis.EvmApi.token.getContractNFTTransfers()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `format` (optional): "decimal" | "hex";
- `lmit` (optional): number;
- `cursor` (optional): string;

</details>

**Example Result in data module of return object**

```js
block_exists: true
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjoxMDAsInRva2VuX2FkZHJlc3MiOiIweDdkZTMwODViMzE5MGIzYTc4NzgyMmVlMTZmMjNiZTAxMGY1Zjg2ODYiLCJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg3ZGUzMDg1YjMxOTBiM2E3ODc4MjJlZTE2ZjIzYmUwMTBmNWY4Njg2In0sInBhZ2UiOjEsImtleSI6IjE0MjgzOTA2LjgxLjk0LjAiLCJ0b3RhbCI6OTAyLCJpYXQiOjE2NTU1MTY3MzN9.yq3IsjF50_9oDwPToKie2OVqJcaCXMsssODDPJugzCA"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 902
```

#### getNftTransfersFromToBlock

Gets the transfers of the tokens from a block number to a block number

```js
Moralis.EvmApi.token.getNftTransfersFromToBlock()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `from_block`(optional): number; The minimum block number from where to get the transfers. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The maximum block number from where to get the transfers. Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_date` (optional): string; The date from where to get the transfers (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `limit` (optional): number;
- `cursor` (optional): string;

</details>

**Example Result in data module of return object**

```js
block_exists: true
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjoxMDAsImZyb21fYmxvY2siOiIxIiwid2hlcmUiOnt9LCJwYWdlIjoxLCJrZXkiOiIxNDk4MjQ3Ni45NS4xNjkuMCIsInRvdGFsIjoxMjYzODYwMDEsImlhdCI6MTY1NTUxNzUzNH0.9JzvwTkpmePWqLdo9T-Az37_cIEMFNKyNUPeZJhGdcY"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 126386001
```

#### getTokenAddressTransfers

Gets ERC20 token contract transactions in descending order based on block number

```js
Moralis.EvmApi.token.getTokenAddressTransfers()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `subdomain`(optional) - The subdomain of the moralis server to use (**Only use when selecting local devchain as chain**)
- `from_block`(optional): number; The minimum block number from where to get the transfers. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The maximum block number from where to get the transfers. Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_date` (optional): string; The date from where to get the transfers (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `limit` (optional): number;
- `cursor` (optional): string;

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhhMjEwN2ZhNWIzOGQ5YmJkMmM0NjFkNmVkZjExYjExYTUwZjZiOTc0IiwiY2hhaW4iOiIweDEiLCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0OTc5ODg3IiwicGFnZSI6MSwidG90YWwiOjgxMjM5Niwib2Zmc2V0IjoyLCJ1YyI6dHJ1ZSwiaWF0IjoxNjU1NTE3OTM2fQ.HbcD2nmmYQ63WTcvDw_HGp_1ph5fthAE1-Wgf3O0hF8"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 812396
```

#### getNFTTrades

Get the nft trades for a given contracts and marketplace

```js
Moralis.EvmApi.token.getNFTTrades()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `from_block`(optional): number; The minimum block number from where to get the transfers. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; To get the reserves at this block number.
- `from_date` (optional): string; The date from where to get the transfers (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get the reserves to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `provider_url` (optional): string; web3 provider url to user when using **local dev chain**
- `marketplace` (optional): opensea; marketplace from where to get the trades (only opensea is supported at the moment).
- `limit` (optional): number;
- `cursor` (optional): string;

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW1pdCI6NTAwLCJvZmZzZXQiOjAsIm9yZGVyIjpbWyJ0cmFuc2Zlcl9pbmRleCIsIkRFU0MiXV0sIndoZXJlIjp7InNlbGxlcl9hZGRyZXNzIjp7fSwiYnV5ZXJfYWRkcmVzcyI6e30sInRva2VuX2FkZHJlc3MiOiIweDdkZTMwODViMzE5MGIzYTc4NzgyMmVlMTZmMjNiZTAxMGY1Zjg2ODYifSwicGFnZSI6MSwia2V5IjoiMTQyMzg4NTguMjA0IiwidG90YWwiOjU0LCJpYXQiOjE2NTU1MTgxNDB9.KhaAiUdJp1YZZKx5d4qK8JFlYN2c0HFpjVIejq8sR0Y"
page: 0
page_size: 500
result: (54) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 54
```

#### getNFTLowestPrice

Get the lowest price found for a nft token contract for the last x days (only trades paid in ETH)

```js
Moralis.EvmApi.token.getNFTLowestPrice()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `days` (optional): number; The number of days to look back to find the lowest price. If not provided 7 days will be the default.
- `provider_url` (optional): string; web3 provider url to user when using **local dev chain**
- `marketplace` (optional): opensea; marketplace from where to get the trades (only opensea is supported at the moment).

</details>

#### getWalletTokenIdTransfers

Gets the transfers of the tokens matching the given parameters

```js
Moralis.EvmApi.token.getWalletTokenIdTransfers()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `token_id`(required): string; The id of the token.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `order`(optional): string; he field(s) to order on and if it should be ordered in ascending or descending order. Specified by: fieldName1.order,fieldName2.order. Example 1: "block_number", "block_number.ASC", "block_number.DESC", Example 2: "block_number and contract_type", "block_number.ASC,contract_type.DESC"
- `limit`(optional): number; 
- `cursor`(optional): string; The cursor returned in the last response (for getting the next page)

</details>

**Example Result in data module of return object**

```js
block_exists: true
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjoxMDAsInRva2VuX2FkZHJlc3MiOiIweDdkZTMwODViMzE5MGIzYTc4NzgyMmVlMTZmMjNiZTAxMGY1Zjg2ODYiLCJ0b2tlbl9pZCI6IjE4Iiwid2hlcmUiOnt9LCJwYWdlIjoxLCJrZXkiOiIxNDIzODE1OC4xNjIuNDM2LjAiLCJ0b3RhbCI6MSwiaWF0IjoxNjU1NTIwMzM2fQ.gRd3pmZfh6jO01CRX2gDNy6niOTt-NxNwle83hth3t8"
page: 0
page_size: 100
result: [{…}]
total: 1
```

#### getTokenMetadataBySymbol

Returns metadata (name, symbol, decimals, logo) for a given token contract address.

```js
Moralis.EvmApi.token.getTokenMetadataBySymbol()
```

<details open><summary>Options</summary>

- `symbols`(required): string[]; The symbols to get metadata for.
- `chain`(optional): The chain to query.
- `subdomain`(optional) - The subdomain of the moralis server to use (**Only use when selecting local devchain as chain**)

</details>

**Example Result in data module of return object**

```js
 Array(106)
[0 … 99]
0: {address: '0x514910771af9ca656af840dff83e8264ecf986ca', name: 'Chain Link', symbol: 'LINK', decimals: '18', logo: 'https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png', …}
1: {address: '0xa2df16c6d86fc5d9146555475b421b010d6393cc', name: 'LinkNetwork', symbol: 'LINK', decimals: '18', logo: null, …}
2: {address: '0x7c809b9e0d40133d69a997f060f49c78d06369ef', name: 'ChainLink   Token', symbol: 'LINK', decimals: '18', logo: null, …}
3: {address: '0xef8141faa2f27828522ddace18884ec0d78a47f5', name: 'ChainLink', symbol: 'LINK', decimals: '18', logo: null, …}
4: .....
5: .....
....
```

#### getTokenMetadata

Returns metadata (name, symbol, decimals, logo) for a given token contract address.

```js
Moralis.EvmApi.token.getTokenMetadata()
```

<details open><summary>Options</summary>

- `addresses`(required): string[]; The addresses to get metadata for.
- `chain`(optional): The chain to query.
- `subdomain`(optional) - The subdomain of the moralis server to use (**Only use when selecting local devchain as chain**)
- `providerUrl`(optional) - web3 provider url to user when using **local dev chain**

</details>

**Example Result in data module of return object**

```js
 Array(1)
0: {address: '0xdac17f958d2ee523a2206206994597c13d831ec7', name: 'Tether USD', symbol: 'USDT', decimals: '6', logo: 'https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png', …}
length: 1
```

#### getAllTokenIds

Gets data, including metadata (where available), for all token ids for the given contract address.
   * Results are limited to 500 per page by default
   * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection

```js
Moralis.EvmApi.token.getAllTokenIds()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `limit`(optional): number; 
- `cursor`(optional): string; The cursor returned in the last response (for getting the next page)

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg3ZGUzMDg1YjMxOTBiM2E3ODc4MjJlZTE2ZjIzYmUwMTBmNWY4Njg2In0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltbInRva2VuX2hhc2giLCJERVNDIl1dLCJncm91cCI6WyJ0b2tlbl9oYXNoIiwidG9rZW5fYWRkcmVzcyIsInRva2VuX2lkIiwiYmxvY2tfbnVtYmVyX21pbnRlZCJdLCJwYWdlIjoxLCJrZXkiOiJlMzJlMzQzNDkxYmRiY2E4ZjUzYzE2NjY3OWY0M2FkZiIsInRvdGFsIjo3NDEsImlhdCI6MTY1NTUyMDY1NX0.y2cbl1VEr2Ed-8g43A0uc4YOu1y1uhP3B7rg6Wj1STc"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 741
```

#### searchNFTs

Gets NFTs that match a given metadata search.

```js
Moralis.EvmApi.token.searchNFTs()
```

<details open><summary>Options</summary>

- `q`(required): string; The search string.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `filter`(optional): "name" | "description" | "attributes" | "global" | "name,description" | "name,attributes" | "description,attributes" | "name,description,attributes"; What fields the search should match on. To look into the entire metadata set the value to 'global'. To have a better response time you can look into a specific field like name.

- `from_block`(optional): number; The minimum block number from where to start the search. Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): number; The maximum block number from where to start the search. Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_date` (optional): string; The date from where to start the search (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date'. If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): string; Get search results up until this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date'. If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `addresses`(optional): string[]; The addresses to get metadata for.
- `limit` (optional): number;
- `cursor` (optional): string;

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxIjoiUGFuY2FrZSIsImRlc2NyaXB0aW9uIjpmYWxzZSwiYXR0cmlidXRlcyI6ZmFsc2UsIm5hbWUiOmZhbHNlLCJnbG9iYWwiOmZhbHNlLCJsaW1pdCI6IjUwMCIsInRva2VuX2FkZHJlc3NlcyI6bnVsbCwid2hlcmUiOnt9LCJwYWdlIjoxLCJvZmZzZXQiOjAsImtleSI6ImVkMTdiYWUwOTllNjE3OWZiZWFjZjA4MTQxNDhmYzZhIiwidG90YWwiOjY2NzQsImlhdCI6MTY1NTUyMDc1N30.VbJESx5NI0p1PaqUhfjfWzAX0ersxkb5o2tbxoM6FI8"
page: 0
page_size: 500
result: (500) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
total: 6674
```

#### getNFTOwners

* Gets all owners of NFT items within a given contract collection
* Use after /nft/contract/{token_address} to find out who owns each token id in a collection
* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
   

```js
Moralis.EvmApi.token.getNFTOwners()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `limit`(optional): number; 
- `cursor`(optional): string; The cursor returned in the last response (for getting the next page)

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg3ZGUzMDg1YjMxOTBiM2E3ODc4MjJlZTE2ZjIzYmUwMTBmNWY4Njg2In0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltbInRyYW5zZmVyX2luZGV4IiwiREVTQyJdXSwicGFnZSI6MSwia2V5IjoiMTQyNzM4NTIuNDMuNjUuMCIsInRvdGFsIjo3NDEsImlhdCI6MTY1NTUyMTQwMn0.OEPtdnQuTlBNtMDd9qzRXobrjt-8uc7dm86gvjXalMQ"
page: 0
page_size: 100
result: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
status: "SYNCED"
total: 741
```

#### getTokenIdOwners

* Gets all owners of NFT items within a given contract collection
* Use after /nft/contract/{token_address} to find out who owns each token id in a collection
* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection  

```js
Moralis.EvmApi.token.getTokenIdOwners()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `token_id`(required): string; The id of the token.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";
- `limit`(optional): number; 
- `cursor`(optional): string; The cursor returned in the last response (for getting the next page)

</details>

**Example Result in data module of return object**

```js
cursor: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHg3ZGUzMDg1YjMxOTBiM2E3ODc4MjJlZTE2ZjIzYmUwMTBmNWY4Njg2IiwidG9rZW5faWQiOiIxIiwidG9rZW5faGFzaCI6ImVjNTU1ZDA2MDFlOTVhMzQ1MmQ4YThiYmNlOGFhOGI5In0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltbInRyYW5zZmVyX2luZGV4IiwiREVTQyJdXSwicGFnZSI6MSwia2V5IjoiMTQyMzgxNTguMTYyLjQxOS4wIiwidG90YWwiOjEsImlhdCI6MTY1NTUyMTQ5N30.tC_G6wlwRl35QnucefQBEjMqCWoEVi7eEpmlIiBDPrY"
page: 0
page_size: 100
result: [{…}]
status: "SYNCED"
total: 1
```

#### getTokenIdMetadata

* Gets data, including metadata (where available), for the given token id of the given contract address.
* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.

```js
Moralis.EvmApi.token.getTokenIdMetadata()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `token_id`(required): string; The id of the token.
- `chain`(optional): The chain to query.
- `format`(optional): "decimal" | "hex";

</details>

**Example Result in data module of return object**

```js
amount: "1"
block_number: "14238158"
block_number_minted: "14238158"
contract_type: "ERC721"
last_metadata_sync: "2022-06-16T06:15:09.467Z"
last_token_uri_sync: "2022-05-19T20:40:48.775Z"
metadata: "{\"name\":\"Baby Mutant #1\",\"description\":\"\",\"image\":\"ipfs://QmPUDVLP9W1pWpCTpGvpPbMu4nVpCuu2A7M6tQovDpVDoD/1.png\",\"dna\":\"ae67505fd836e20e0077dec5d4505759f775958f\",\"edition\":1,\"date\":1645022752327,\"artist\":\"Skurvydogg\",\"attributes\":[{\"trait_type\":\"BackGrounds\",\"value\":\"Radioactive_Yellow_Forest\"},{\"trait_type\":\"Furs\",\"value\":\"Gold\"},{\"trait_type\":\"Eyes\",\"value\":\"Hypnotized_M3\"},{\"trait_type\":\"Clothes\",\"value\":\"Toga_M2\"},{\"trait_type\":\"Mouths\",\"value\":\"Color_grill_M2\"}]}"
name: "Baby Ape Mutant Club"
owner_of: "0x324fb4a58674758e00c3a49409b815de1398bfe8"
symbol: "BAMC"
synced_at: "2022-06-16T06:15:09.467Z"
token_address: "0x7de3085b3190b3a787822ee16f23be010f5f8686"
token_hash: "ec555d0601e95a3452d8a8bbce8aa8b9"
token_id: "1"
token_uri: "https://ipfs.moralis.io:2053/ipfs/QmajSqgxY3cWBgBeRm38vasJAcTit1kp5EwqVHxszJYgUC/1.json"
```

#### getNFTMetadata

* Gets the contract level metadata (name, symbol, base token uri) for the given contract
* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection

```js
Moralis.EvmApi.token.getNFTMetadata()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.

</details>

**Example Result in data module of return object**

```js
contract_type: "ERC721"
name: "Baby Ape Mutant Club"
symbol: "BAMC"
synced_at: "2022-02-19T00:00:00.000Z"
token_address: "0x7de3085b3190b3a787822ee16f23be010f5f8686"
```

#### syncNFTContract

Sync a Contract for NFT Index

```js
Moralis.EvmApi.token.syncNFTContract()
```

<details open><summary>Options</summary>

- `address`(required): string; Address of the contract.
- `chain`(optional): The chain to query.

</details>


### `info`
#### web3ApiVersion

Returns the web3 api version

```js
Moralis.EvmApi.info.web3ApiVersion()
```

**Example Result in data module of return object**

```js
version: "0.0.53"
```

#### endpointWeights

Returns the endpoint price list for rate limits and costs

```js
Moralis.EvmApi.info.endpointWeights()
```

**Example Result in data module of return object**

```js
Array(37)
0: {endpoint: 'getBlock', path: '/block/{block_number_or_hash}', price: 5, rateLimitCost: 5}
1: {endpoint: 'getContractEvents', path: '/{address}/events', price: 2, rateLimitCost: 2}
2: {endpoint: 'getTransactions', path: '/{address}', price: 1, rateLimitCost: 1}
3: {endpoint: 'getNativeBalance', path: '/{address}/balance', price: 1, rateLimitCost: 1}
4: {endpoint: 'getTokenBalances', path: '/{address}/erc20', price: 5, rateLimitCost: 5}
5: {endpoint: 'getTokenTransfers', path: '/{address}/erc20/transfers', price: 2, rateLimitCost: 2}
6: {endpoint: 'getTokenAddressTransfers', path: '/erc20/{address}/transfers', price: 2, rateLimitCost: 2}
7: {endpoint: 'searchNFTs', path: '/nft/search', price: 5, rateLimitCost: 5}
8: {endpoint: 'getNFTs', path: '/{address}/nft', price: 5, rateLimitCost: 5}
9: {endpoint: 'getNFTTransfers', path: '/{address}/nft/transfers', price: 5, rateLimitCost: 5}
10: {endpoint: 'getNftTransfersByBlock', path: '/block/{block_number_or_hash}/nft/transfers', price: 2, rateLimitCost: 2}
11: {endpoint: 'getNFTsForContract', path: '/{address}/nft/{token_address}', price: 5, rateLimitCost: 5}
12: {endpoint: 'getTokenMetadata', path: '/erc20/metadata', price: 1, rateLimitCost: 1}
13: {endpoint: 'web3ApiVersion', path: '/web3/version', price: 1, rateLimitCost: 1}
14: {endpoint: 'getTokenMetadataBySymbol', path: '/erc20/metadata/symbols', price: 1, rateLimitCost: 1}
15: {endpoint: 'getTokenPrice', path: '/erc20/{address}/price', price: 3, rateLimitCost: 3}
16: {endpoint: 'getTokenAllowance', path: '/erc20/{address}/allowance', price: 1, rateLimitCost: 1}
17: {endpoint: 'getAllTokenIds', path: '/nft/{address}', price: 5, rateLimitCost: 5}
18: {endpoint: 'getContractNFTTransfers', path: '/nft/{address}/transfers', price: 5, rateLimitCost: 5}
19: {endpoint: 'getNFTOwners', path: '/nft/{address}/owners', price: 5, rateLimitCost: 5}
20: {endpoint: 'getNFTMetadata', path: '/nft/{address}/metadata', price: 5, rateLimitCost: 5}
21: {endpoint: 'syncNFTContract', path: '/nft/{address}/sync', price: 5, rateLimitCost: 25}
22: {endpoint: 'reSyncMetadata', path: '/nft/{address}/{token_id}/metadata/resync', price: 5, rateLimitCost: 25}
23: {endpoint: 'getTokenIdMetadata', path: '/nft/{address}/{token_id}', price: 2, rateLimitCost: 2}
24: {endpoint: 'getTokenIdOwners', path: '/nft/{address}/{token_id}/owners', price: 20, rateLimitCost: 20}
25: {endpoint: 'getWalletTokenIdTransfers', path: '/nft/{address}/{token_id}/transfers', price: 2, rateLimitCost: 2}
26: {endpoint: 'resolveDomain', path: '/resolve/{domain}', price: 1, rateLimitCost: 1}
27: {endpoint: 'getPairReserves', path: '/{pair_address}/reserves', price: 1, rateLimitCost: 1}
28: {endpoint: 'getLogsByAddress', path: '/{address}/logs', price: 2, rateLimitCost: 2}
29: {endpoint: 'getNftTransfersFromToBlock', path: '/nft/transfers', price: 5, rateLimitCost: 5}
30: {endpoint: 'getNFTTrades', path: '/nft/{address}/trades', price: 4, rateLimitCost: 4}
31: {endpoint: 'getNFTLowestPrice', path: '/nft/{address}/lowestprice', price: 4, rateLimitCost: 4}
32: {endpoint: 'runContractFunction', path: '/{address}/function', price: 2, rateLimitCost: 2}
33: {endpoint: 'getTransaction', path: '/{address}', price: 2, rateLimitCost: 2}
34: {endpoint: 'resolveAddress', path: '/resolve/{address}/reverse', price: 1, rateLimitCost: 1}
35: {endpoint: 'uploadIPFSFolder', price: 25, rateLimitCost: 25}
36: {endpoint: 'endpointWeights', path: '/info/endpointWeights', price: 0, rateLimitCost: 1}
length: 37
```

### `storage`
#### uploadFolder

Uploads multiple files and place them in a folder directory

```js
Moralis.EvmApi.storage.uploadFolder()
```

<details open><summary>Options</summary>

- `abi` (required): Array of JSON and Base64 Supported

</details>

**Example Result in data module of return object**

```js
Array(1)
0: {path: 'https://ipfs.moralis.io:2053/ipfs/QmfL6fMaYJDnizFVj4wxyutDnGMePG2JL95rN2A5mcWyB1/moralis/logo.jpg'}
length: 1

```