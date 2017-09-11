import { IBlogState, IBlogPost, BlogLoadStatusEnum } from "./interfaces";
import { actionTypes } from "./actions";
import { IAction } from "./../common-interfaces";

const initialState: IBlogState = {
  loadStatus: BlogLoadStatusEnum.INITIAL,
  stories: []
}

export const stories = (state: IBlogState = initialState, action: IAction): IBlogState => {
  switch (action.type) {
    case actionTypes.FETCH_STORIES_START:
      return {
        ...state,
        loadStatus: BlogLoadStatusEnum.FETCHING
      }

    case actionTypes.FETCH_STORIES_END:
      return {
        ...state,
        loadStatus: BlogLoadStatusEnum.UPDATING
      }

    case actionTypes.UPDATE_STORIES:
      return {
        ...state,
        loadStatus: BlogLoadStatusEnum.COMPLETE,
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
      let storyFound = false;
      let stories = state.stories.map(story => {
        if (story.id === action.payload.id) {
          storyFound = true;
          return action.payload;
        } else {
          return story;
        }
      });

      if (!storyFound) {
        stories.push(action.payload);
      }
      
      return {
        ...state,
        loadStatus: BlogLoadStatusEnum.COMPLETE,
        stories
      }

    default:
      return state
  }
}