# Wallet Dapp
## Wallet Implementation 

This Dapp is developed using reactjs,tailwind CSS for frontend and Express framework, MongoDB and Ethereum with NodeJs environment for backend.
- User can SignUp to the system to use the API.User wallet address and it's key is generated using etherjs and bip39.
- User can deposit, withdraw and  transfer the funds in the form of ERC20 tokens to the other users of the system.

***

### Features

- User session is maintained using JWT.
- Confirmation is send via Email on User signUp.
- User account is password protected.
- Transaction Confirmation is send via Email to the User
- Transaction is acheived using ERC20 contracts deployed on chain

***

### Tech Stack Used

	Frontend:
	- Javascript
    - React Framework
	- Tailwind CSS

	Backend:
    - Node.js
    - Express
    - Nodemailer
    - Mongoose
    - MongoDB
    - Hardhat
    - Solidity
    - Etherjs

***
### Application features:  

* **Signup Page**: User can register for an account on the wallet application. 
* **Verification Page**: User need to verify email after successfull registration .
* **Login Page**: User can login to enter into dashboard page. 
* **User Dashboard**: User can deposit,withdraw,transfer token,get user details,check balance of multiple tokens,get transaction details etc.


## Steps to run the application:
** You need to run both frontend and backend.

#### i) Run the backend
API requires installed Node.js to run.
Clone the Repo and Install the dependencies and devDependencies. Deploy the token contract using Hardhat environment and get the address of the deployed contract and add it to the environment variable. Start the server.

```sh
npm i
npm start
```
This API is not ready for the use in production.

***
#### ii) Run the frontend
Dapp requires installed react.js to run.
Clone the Repo and Install the dependencies and devDependencies.Set the backend URL as proxy in package.json . Example => "proxy":"http://localhost:7000"

  Start the server.

```sh
npm i
npm start
```
***

