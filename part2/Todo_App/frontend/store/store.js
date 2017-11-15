import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// initial state
// store.getState();


export default configureStore;
