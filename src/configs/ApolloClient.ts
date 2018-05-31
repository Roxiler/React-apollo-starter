import ApolloClient from 'apollo-boost';
import { LocalStorage } from '../common/services';
import Config from '../common/config';

const client = new ApolloClient({
    uri: `${Config.API_SERVER_URL}graphql`,
    request: async (operation) => {
      const token = LocalStorage.getItem('apiToken');
      operation.setContext({
        headers: {
          authorization: token || ''
        }
      });
    }
  });

export default client;