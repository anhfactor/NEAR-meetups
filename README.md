# `Near-meetups`

📄 Description
==================

NEAR meetups is a decentralized meetups version. A user gets to add an event, view an event, view events, and function callers get to initiate sponsorships. The project currently entails the relative functions in the smart contract, with some unit tests, with progressive plans of utilizing react in my views.




1. Create a meeting
2. View meeting with id.
3. View all meetings.

📦 Instalation
================

To run this project locally, you need to do the following steps:

Step 1: Prerequisites
---- 

1 . Make sure you have installed \ [Node.js]() ≥ 12 (we recommend using \ [nvm]())
1. Make sure you have installed yarn: `npm install -g yarn`
2. Install dependencies: `yarn`
3. Create a NEAR test account \ [https://wallet.testnet.near.org/]()
4. Install NEAR CLI globally: \ [near-cli]() is a command line interface (CLI) to interact with NEAR blockchain

	yarn install --global near-cli

Step 2: NEAR CLI Configuration
---- 

Configure your near-cli to authorize your newly created trial account:

	near login

Step 3: Create and perform a smart contract development deployment
---- 

Create the InfoUser smart contract code and deploy the local development server: `yarn build` (see`package.json` for a full list of` scripts` you can run with`yarn`). This script returns you an implemented interim smart contract (save it for later use). To deploy the contract generated with `yarn build` in testnet \ [https://wallet.testnet.near.org/](), execute the command` yarn deploy` which will return the id of the deployed contract which we will use to execute each one of the methods contained in the contract.

📑 Exploring InfoUser smart contract methods
==================

The following commands allow you to interact with the smart contract methods using the NEAR CLI (for this, you must have an interim smart contract implemented).

Note: 
---- 
$ CONTRACT is a variable, but it is empty, you have to assign it, the way it assigns it is as follows, in the console, for example:
---- 
    export CONTRACT= [Contract-address]

Command to add event: 
---- 
	near call $CONTRACT addEvent '{ "title":"string", "description":"string", "location":"string", "date":"string", "imageURL":"string"}' --account_id <your test account>

Command to query all event:
---- 
	near view $CONTRACT getEvents

Command to query one event:
---- 
	near view $CONTRACT getEvent '{"id":"number"}' 


🤖 Test
---- 
Use the following command to run the tests:

	yarn test