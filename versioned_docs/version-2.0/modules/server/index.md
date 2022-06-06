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
Moralis.start()
```

```js
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
const environment = "YOUR_ENVIRONMENT"
Moralis.start({ serverUrl, appId, environment });
```
<details open><summary>Options</summary><br/>

- `appId`(required)
- `serverUrl` (required)
- `environment` (required)

### onInitialized
### onAuthenticating
### onAuthenticated
### onAutenticatingError
### onLoggedOut
### isInitialized
### authenticate
### logout
### signUp
### signIn
### currentUser
### currentUserAsync
### linkEvmAddress
### unlinkEvmAddress

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


