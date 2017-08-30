import { IStoriesState, IStory, IStoriesLoadStatus } from "./interfaces";
import { actionTypes } from "./actions";
import { IAction } from "./../root-action";

const initialState: IStoriesState = {
  loadStatus: IStoriesLoadStatus.INITIAL,
  stories: []
}

export const stories = (state: IStoriesState = initialState, action: IAction): IStoriesState => {
  switch (action.type) {
    case actionTypes.FETCH_STORIES_START:
      return {
        ...state,
        loadStatus: IStoriesLoadStatus.FETCHING
      }

    case actionTypes.FETCH_STORIES_END:
      return {
        ...state,
        loadStatus: IStoriesLoadStatus.UPDATING
      }

    case actionTypes.UPDATE_STORIES:
      return {
        ...state,
        loadStatus: IStoriesLoadStatus.COMPLETE,
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
      const stories = state.stories.map(story =>
        (story.id === action.payload.id) ? action.payload : story
      )
      return {
        ...state,
        loadStatus: IStoriesLoadStatus.COMPLETE,
        stories
      }

    default:
      return state
  }
}