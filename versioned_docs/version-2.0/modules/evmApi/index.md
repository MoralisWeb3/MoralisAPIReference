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
#### getTokenPrice
#### getTokenAllowance
#### getContractNFTTransfers
#### getNftTransfersFromToBlock
#### getTokenAddressTransfers
#### getNFTTrades
#### getNFTLowestPrice
#### getWalletTokenIdTransfers
#### getTokenMetadataBySymbol
#### getTokenMetadata
#### getAllTokenIds
#### searchNFTs
#### getNFTOwners
#### getTokenIdOwners
#### getTokenIdMetadata
#### getNFTMetadata
#### syncNFTContract

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