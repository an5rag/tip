import { IAction } from "./../common-interfaces";
import { actionTypes } from "./actions";
import { IStoriesState, IStory, StoriesLoadStatusEnum } from "./interfaces";

const initialState: IStoriesState = {
  loadStatus: StoriesLoadStatusEnum.INITIAL,
  stories: {}
};

export const stories = (state: IStoriesState = initialState, action: IAction): IStoriesState => {
  switch (action.type) {
    case actionTypes.FETCH_STORIES_START:
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.FETCHING
      };

    case actionTypes.FETCH_STORIES_END:
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.COMPLETE
      };

    case actionTypes.FETCH_STORIES_ERROR:
      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.ERROR,
        fetchError: action.payload.error,
        currentStory: null
      };

    case actionTypes.UPDATE_STORIES:
      return {
        ...state,
        stories: action.payload
      };

    case actionTypes.SET_CURRENT_STORY:
      return {
        ...state,
        currentStory: action.payload.story
      };

    case actionTypes.UPDATE_STORY:
      const updatedStories = state.stories;
      updatedStories[action.payload.id] = action.payload.story;

      return {
        ...state,
        loadStatus: StoriesLoadStatusEnum.COMPLETE,
        stories: updatedStories
      };

    default:
      return state;
  }
};
