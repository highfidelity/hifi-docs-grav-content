---
title: 'Account'
taxonomy:
    category:
        - docs
---

## Account API

This API is getting deprecated and will be merged with the [Global Services API](../../api-reference/global-services). All properties and methods will be listed under the new Account Services API. Watch this space for updates. 

This API provides resources to manage a user's account. 

- [Properties](#properties)
- [Methods](#methods)
- [Events](#events)


##Properties <a id="properties"></a>
| Properties         | Type   | Description |
| ------------------ | ------ | ----------- |
| `Account.username`   | string | The username associated with an account.|
| `Account.loggedIn`   | boolean | The logged state of the account.|


| Methods                                |
| -------------------------------------- |
| `Account.getUsername()`                  |
| `Account.isLoggedIn()`                   |
| `Account.logOut()`                   |


##Events <a id="events"></a>
| Events                             |
| ---------------------------------- |
| `Account.usernameChanged()`          |
| `Account.loggedInChanged()`          |


##Methods <a id="methods"></a>

###`Account.getUsername()` 

Returns the username associated with the account. 

**Returns**

| Value         | Type   | Description |
| ------------------ | ------ | ----------- |
| username | string | The username associated with an account.|


###`Account.isLoggedIn()` 

Determines if the current account is logged in or not. 

**Returns**

| Value         | Type   | Description |
| ------------------ | ------ | ----------- |
| `true` or `false` | boolean | `true` if the account is logged in, `false` otherwise.|


###`Account.logOut()` 

Logs out of the current account. 

This method has no return value. 

