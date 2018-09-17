import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from "apollo-boost";
import {ApolloLink } from 'apollo-link'
import {  HttpLink } from 'apollo-link-http'
import {WebSocketLink } from 'apollo-link-ws'
import {getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './containers/Homepage';
import './assets/index.css'
import registerServiceWorker from './registerServiceWorker';

// const Httplink = new HttpLink({
//    uri :'https://api.graph.cool/simple/v1/cjm2df1jf1ciq0147fztg4th7' 
// })
// const wsLink = new WebSocketLink({
//     uri:'wss://subscriptions.graph.cool/v1/cjm2df1jf1ciq0147fztg4th7',
//     options:{
//         reconnect: true
//     }
// })


const client = new ApolloClient ({
    uri:'http://localhost:3500/graphql',
    onError: (e) => { console.log(e.graphQLErrors) },
})


// const link = ApolloLink.split(
//     ({query}) => {
//         const { kind, operation } = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     wsLink,
//     httplink,
// );

// const client = new ApolloClient({
//     link:link,
//     cache: new InMemoryCache()
// })


ReactDOM.render(
 <ApolloProvider client={client}>
            <App />
    </ApolloProvider> , document.getElementById('root'));
registerServiceWorker();
