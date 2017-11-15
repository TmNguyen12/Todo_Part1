import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => createStore(
  rootReducer
);

// initial state
// store.getState();

export default configureStore;
