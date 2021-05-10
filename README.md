[![Build Status](https://travis-ci.com/ebuchmann/demo-project.svg?branch=master)](https://travis-ci.com/ebuchmann/demo-project)
[![codecov](https://codecov.io/gh/ebuchmann/demo-project/branch/master/graph/badge.svg)](https://codecov.io/gh/ebuchmann/demo-project)

# Demo Project

- Finish readme
- Make styles more consistent

This is a demo project that shows GraphQL, React, Jest, Travis CI, and a few other things.

## Running this project

To get started do the following after cloning the project:

1. Run `yarn install` - to install dependencies
2. Get an API key at [Alphavantage.co](https://www.alphavantage.co/support/#api-key)
3. Make a copy of `config/local.example.js` and rename it as `config/local.js`
4. Fill in the `apiKey` value in the `config/local.js` file with the key you generated, this file is not tracked in git
5. Run `yarn start` - to start the client and graphql server
6. Visit [http://localhost:3000/](http://localhost:3000/) to see the demo
7. Visit [http://localhost:8080/graphql](http://localhost:8080/graphql) if you'd like to do something in the Graphql playground

## Technologies

### Graphql

### Graphql Codegen

The ability to generate Typescript types based on GQL schemas is amazing. This tool also provides more than just type definitions to use on the server, it can also generate client side code for your queries and mutations that come fully typed. Getting all the types for a `useQuery` hook can be a pain, but this makes it simple. Another benefit is generating the typeDefs based on the schema for use in tests where we want to automatically mock certain data based on it's type.

### React

### Apollo Client

### Jest

### Travis CI
