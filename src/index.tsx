import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './configs/registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './configs/ApolloClient';
import { Provider } from 'react-redux';
import configureStore from './configs/store';

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>    
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
