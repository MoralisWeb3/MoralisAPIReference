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
#### getBlock
#### getDateToBlock
#### getTransaction
#### getLogsByAddress
#### getNFTTransfersByBlock
#### getContractEvents

### `account`
#### getTokenBalances
#### getNativeBalance
#### getNFTTransfers
#### getTokenTransfers
#### getTransactions
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
 