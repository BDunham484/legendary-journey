import '@/styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const SERVER_URL = 
  process.env.NODE_ENV === 'production' ? 'https://www.sample.com' : 'http://localhost:3003'

const httpLink = createHttpLink({
  uri: `${SERVER_URL}/graphql`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )

}
