# Gold Price Watcher

This app is for checking a gold price every day and if the price is hit the `value` you want, they gonna send you email.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Prequisites package:
* NodeJS (NodeJS Programming Language) Version 16.xx or higher
* NPM (NodeJS Dependency Package Management Tool) Version 8.xx or higher

## Installing 

Below is the instructions to make this codebase running:
* Pull the codebase from this repository
```sh
git clone https://github.com/tedante/gold-price-watcher

cd gold-price-watcher
```
* Run following command to pull dependecies package
```sh
npm install
```
* Copy and edit .env 
```sh
cp .env.example .env
```
* Until this step you already can run this code by using this command (if you use node 18.xx or higher)
```sh
node --watch app.js
```
* or using nodemon
```sh
nodemon app.js
```

## Structure

- `modules`

the place for storing a logic application.
