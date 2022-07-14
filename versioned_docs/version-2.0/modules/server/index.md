---
id: "index"
title: "Server Module"
sidebar_label: "Server"
sidebar_position: 4
custom_edit_url: null
toc_max_heading_level: 4
---

```js
Moralis.server.xxx()
```
### start

Connect to your Moralis instance.

```js
Moralis.server.start()
```

```js
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
const environment = "YOUR_ENVIRONMENT"
Moralis.server.start({ serverUrl, appId, environment });
```
<details open><summary>Options</summary>

- `appId`(required)
- `serverUrl` (required)
- `environment`

</details>

### onInitialized

Listen to events when a Moralis instance is Initialized

```js
Moralis.server.onInitailized()
```

### onAuthenticating

Listen to events while a User is being Authenticated

```js
Moralis.server.onAuthenticating()
```
### onAuthenticated

Listen to events while a User is Authenticated

```js
Moralis.server.onAuthenticated()
```

### onAutenticatingError

Listen to events when a User Autentication fails

```js
Moralis.server.onAutenticatingError()
```

### onLoggedOut

Listen to events when a User is Logged Out

```js
Moralis.server.onLoggedOut()
```

### isInitialized

Listen to events when a Moralis instance post Initialization
```js
Moralis.server.isInitialized()
```

### authenticate

Authenticate user with this method

```js
Moralis.server.authenticate()
```
<details open><summary>Options</summary>

- `method`(required) - EVM | SOL | SIGNIN | SIGN_UP 
- `options` a key-value pair, where key is string and value can be string, number, boolean, null, undefined, Parse.File

</details>

### logout

User gets logout with this Method

```js
Moralis.server.logout()
```

### signUp
Method to Sign up a User


```js
Moralis.server.signUp(username, password, email, fields)
```
<details open><summary>Options</summary>

- `username`(required)
- `password` (required)
- `email`
- `fields` - a key-value pair, where key is string and value can be string, number, boolean, null, undefined, Parse.File

</details>

### signIn

Method to Log in/Sign in a User

```js
Moralis.server.signIn(username, password)
```
<details open><summary>Options</summary>

- `username`(required)
- `password` (required)
  
</details>

### currentUser

Returns current User details

```js
Moralis.server.currentUser()
```

### currentUserAsync

Returns current User details with a promise

```js
Moralis.server.currentUserAsync()
```

### linkEvmAddress

Link address to user profile

```js
Moralis.server.linkEvmAddress(account, options)
```

<details open><summary>Options</summary>

- `account`(required) - EVM address
- `options` - A message string

</details>

### unlinkEvmAddress

```js
Moralis.server.linkEvmAddress(account)
```
<details open><summary>Options</summary>

- `account`(required) - EVM address


</details>

## Parse Server Classes
### ACL
**Extension of Parse ACL Class ** : [Moralis.ACL Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.ACL.html)
### CLP

### Cloud
### File
```js
const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
const file = new Moralis.Server.File("myfile.txt", { base64: base64 });
await file.xxx();
```

### GeoPoint
### Polygon
**Extension of Parse Polygon Class ** : [Parse Polygon ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Polygon.html)
### LocalDatastore
### Object
**Extension of Object Class ** : [Moralis.Object Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Object.html)
### Op
### Query
### Relation
### Role
**Extends Moralis.Object Class **
**Extension of Parse Role Class ** : [Moralis.Role Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Role.html)

** Indepth explanation and examples ** : [Moralis Role Documentation](https://docs.moralis.io/moralis-dapp/database/roles)

```js
const role = new Moralis.Server.Role(roleName, roleACL);
role.xxx() 
```

### Session
**Extends `Object` Class **

**Extension of Parse Session Class ** : [Session Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Session.html)

### Storage

### User
**Extension of Parse User Class ** : [Role Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.User.html)

### LiveQuery
**Extension of Parse LiveQuery Class ** : [LiveQuery Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.LiveQuery.html)

```js
Moralis.Server.LiveQuery.on('error', (error) => {
  console.log(error);
});

Moralis.Server.LiveQuery.on('close', () => {
  console.log('socket connection closed');
});
```
### LiveQueryClient
**Extension of Parse LiveQueryClient Class ** : [LiveQueryClient Members and Methods ](https://parseplatform.org/Parse-SDK-JS/api/master/Parse.LiveQueryClient.html)


