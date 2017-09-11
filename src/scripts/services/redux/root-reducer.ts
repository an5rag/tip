import { combineReducers } from 'redux'
import { stories } from './stories/reducers';
import { IStoriesState } from './stories/interfaces';


export interface IRootState {
  stories: IStoriesState
} 

export const rootReducer = combineReducers({
  stories
});