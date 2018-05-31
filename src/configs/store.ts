import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  form: formReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;