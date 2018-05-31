import ApolloClient from 'apollo-boost';
import { LocalStorage } from '../common/services';
import Config from '../common/config';

const client = new ApolloClient({
    uri: `${Config.API_SERVER_URL}graphql`,
    request: async (operation) => {
      const token = LocalStorage.getItem('apiToken');
      const lang = LocalStorage.getItem('lang');
      operation.setContext({
        headers: {
          authorization: token || '',
          'Accept-Language' : lang || 'en'
        }
      });
    }
  });

export default client;