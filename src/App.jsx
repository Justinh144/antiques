import React, { useState, useEffect } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    gql,
    useQuery
  } from '@apollo/client';
  import { Outlet } from 'react-router-dom';
  import { setContext } from '@apollo/client/link/context';
  import './index.css'
  
  import Header from './components/Header';
  import Footer from './components/Footer';
  
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  // Define 'authLink' to add an 'authorization' header to each request.
  // 'setContext' from Apollo Link Context is used to manipulate the context
  const authLink = setContext((_, { headers }) => {
    // Retrieve the token from local storage where it is stored under 
    // key 'id_token'
    const token = localStorage.getItem('id_token');
  
    // Return an object with headers, If a token exists, it includes it as
    // a bearer token in the authorization header.
    // If no token exists, the authorization header will be empty.
      return {
        headers: {
          // Spreads existing headers to preserve them.
          ...headers,
          // Conditionally add 'authorization' header with Bearer token
          // or leave it empty
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });
  
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  
    function App() {
      const [isInitializing, setIsInitializing] = useState(true);
    
      useEffect(() => {
        // Perform any initialization tasks here (e.g., authentication checks)
        // Simulate an async initialization phase
        setTimeout(() => {
          setIsInitializing(false);
        }, 1000); // Simulated delay of 1 second
      }, []);
    
      if (isInitializing) {
        return <div>Loading application...</div>; // Or any other loading indicator
      }
    
      return (
        <ApolloProvider client={client}>
          {/* main */}
          <div className="headCent">
            <Header />
            <main className='main2'>
              <Outlet />
            </main>
            <Footer />
          </div>
        </ApolloProvider>
      );
    }
  
    export default App