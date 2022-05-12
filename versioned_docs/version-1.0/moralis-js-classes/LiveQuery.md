<!-- ---
sidebar_position: 4
--- -->

# Live Query

```js
Moralis.LiveQuery.on('error', (error) => {
  console.log(error);
});

Moralis.LiveQuery.on('close', () => {
  console.log('socket connection closed');
});
```

### open
### close
### error

