import { combineReducers } from 'redux'
import { stories } from './stories/reducers';

export const rootReducer = combineReducers({
  stories
});