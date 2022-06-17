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

**Example Result in data:**

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

**Example Result in data:**

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

**Example Result in data:**

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

**Example Result in data:**
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


### `account`
#### getTokenBalances
#### getNativeBalance
#### getNFTTransfers
#### getTokenTransfers
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

#### getNFTs
#### getNFTsForContract

### `resolve`
#### resolveDomain
#### resolveAddress

### `defi`
#### getPairReserves
#### getPairAddress

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
#### endpointWeights

### `storage`
#### uploadFolder
 