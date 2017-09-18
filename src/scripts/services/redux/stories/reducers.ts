import { IStoriesState, IStory, StoriesLoadStatusEnum } from "./interfaces";
import { actionTypes } from "./actions";
import { IAction } from "./../common-interfaces";

const initialState: IStoriesState = {
  loadStatus: StoriesLoadStatusEnum.INITIAL,
  stories: {}
}

export const stories = (state: IStoriesState = initialState, action: IAction): IStoriesState => {
  switch (action.type) {
    case actionTypes.FETCH_STORIES_START:
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.FETCHING
      }

    case actionTypes.FETCH_STORIES_END:
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.UPDATING
      }

    case actionTypes.UPDATE_STORIES:
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.COMPLETE,
        stories: action.payload
      }

    case actionTypes.SET_CURRENT_STORY:
      return {
        ...state,
        currentStory: {
          id: action.payload.id
        }
      }

    case actionTypes.UPDATE_STORY:
      let stories = state.stories;
      stories[action.payload.id] = action.payload.story;
      
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.COMPLETE,
        stories
      }

    default:
      return state
  }
}