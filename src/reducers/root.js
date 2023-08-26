import { combineReducers } from 'redux';

import counterReducer from './counter';
import apiReducer from './apiReducer';
import updateNumbers from './incDec';

const rootReducer = combineReducers({
  counter: counterReducer,
  api: apiReducer,
  updateNumbers,
});

export default rootReducer;
