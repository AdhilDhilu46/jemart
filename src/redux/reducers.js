import { combineReducers } from 'redux';
import handleCart from './handleCart'; // Example reducer

const rootReducer = combineReducers({
  handleCart,
  // Add other reducers here
});

export default rootReducer;
