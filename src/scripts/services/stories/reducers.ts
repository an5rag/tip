import { IStoriesState, IStory, IStoriesLoadStatus } from "./interfaces";
import { actionTypes } from "./actions";

const initialState: IStoriesState = {
  loadStatus: IStoriesLoadStatus.INITIAL,
  stories: []
}

export const stories = (state: IStoriesState = initialState, action): IStoriesState => {
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

    case actionTypes.UPDATE_STORY:
      const stories = state.stories.map(story =>
        (story.id === action.id) ? action : story
      )
      return {
        ...state,
        stories
      }

    default:
      return state
  }
}