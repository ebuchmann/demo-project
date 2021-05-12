[![Build Status](https://travis-ci.com/ebuchmann/demo-project.svg?branch=master)](https://travis-ci.com/ebuchmann/demo-project)
[![codecov](https://codecov.io/gh/ebuchmann/demo-project/branch/master/graph/badge.svg)](https://codecov.io/gh/ebuchmann/demo-project)

# Demo Project

This is a demo project that shows Typescript, GraphQL, React, Jest, Travis CI, and a few other things.

## Running this project

To get started do the following after cloning the project:

1. Run `yarn install` - to install dependencies
2. Get an API key at [Alphavantage.co](https://www.alphavantage.co/support/#api-key)
3. Make a copy of `config/local.example.js` and rename it as `config/local.js`, this file isn't tracked in GIT to allow each developer to set config values to what they want
4. Fill in the `apiKey` value in the `config/local.js` file with the key you generated
5. Run `yarn start` - to start the client and GraphQL server
6. Visit [http://localhost:3000/](http://localhost:3000/) to see the demo
7. Visit [http://localhost:8080/graphql](http://localhost:8080/graphql) if you'd like to do something in the GraphQL playground

## Why this demo?

I wanted to showcase what could be a complete front-end project that includes both work in React and GraphQL, along with unit tets, integration tests and continuous integration.

### GraphQL server

For the GraphQL layer I'm using [Apollo Server][server] and their [RESTDataSource][rest]. By grouping each resource into it's own folder it makes it clear where to look to update something. Generally a folder, like `symbols`, would map to a micro service. The API used in this example would return data in ways that wouldn't be supported in GraphQL, and generally just seemd unwieldly to work with, so we map the data to a more convinient structure to work with. By doing this in a central location on the server we can reduce the complexity of dealing with this on any interface that may connect to this server.

### React front-end

On the actual front-end code I'm using [React][react], [Apollo Client][apollo], [Emotion][emotion], and [Zustand][zustand] as the main drivers for the application. Not much needs to be said about React since it's fairly standard. Apollo Client will be the main layer to connect to the GQL server and provides a lot of benefits in reducing data transferred, caching, and retry logic. Emotion is useful for working with CSS styling and Zustand is a nice global state management for when we want to access state across different components.

### Testing

[Jest][jest] is used to run the tests and [React Testing Library][rtl] is used to help render and select elements in the components. My preferrence in testing is to test how a component will render and react to data changes, rather than digging into implementation details of the component. It's also preferred to avoid mocking too much which is why I created the `ApolloMockedProvider` component to help automatically mock any GQL request, which also allows us to overwrite the defaults if we want to so we can be more specific on knowing what data is rendering.

A few components have unit tests to check that they'll render the correct way if the data changes, such as positive numbers or negative. Otherwise integration tests are used for verifying the entire appplication works correctly from initial search, selecting an item, and seeing the selection render the preview. The GQL server also has integration tests to verfiy the entire resolver works as a whole when receiving a request.

### Convenience

[GraphQL Code Generator][codegen] is an incredibly useful tool for automatically generated Typescript types based on a GQL schema. These types can be used in both the server and interface layers. This can be taken even further and have GraphQL Code Generator output code for any query or mutation defined in the project and they come complete with the correct types.

[zustand]: https://github.com/pmndrs/zustand 'Zustand'
[emotion]: https://emotion.sh/docs/introduction 'Emotion'
[apollo]: https://www.apollographql.com/docs/react/ 'Apollo Client'
[react]: https://reactjs.org/ 'React'
[rtl]: https://testing-library.com/docs/react-testing-library/intro/ 'React Testing Library'
[jest]: https://jestjs.io/ 'Jest'
[codegen]: https://www.graphql-code-generator.com/ 'GraphQL Code Generator'
[server]: https://www.apollographql.com/docs/apollo-server/ 'Apollo Server'
[rest]: https://www.apollographql.com/docs/apollo-server/data/data-sources/#restdatasource-reference 'RESTDataSource'
