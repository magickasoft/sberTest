import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { persistCache } from 'apollo-cache-persist';

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const GITHUB_PERSONAL_ACCESS_TOKEN = '06c33cc66b273c37925dab777a7ce9a639dc6a0e';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // to do something with graphql error
  }

  if (networkError) {
    // to do something with network error
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

persistCache({
  cache,
  storage: window.localStorage,
});

const apolloClient = new ApolloClient({
  cache,
  link
});

export default apolloClient;