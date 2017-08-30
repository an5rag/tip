import { mockStories } from "./mocks";
import { IStory, IStoriesState } from "./interfaces";

export const actionTypes = {
  FETCH_STORIES_START: "FETCH_STORIES",
  UPDATE_STORIES:"UPDATE_STORIES",
  FETCH_STORIES_END:"FETCH_STORIES_COMPLETE",
  UPDATE_STORY:"UPDATE_STORY"
}

export const actionCreators = {
  fetchStoriesStart: () => {
    return {
      type: actionTypes.FETCH_STORIES_START
    }
  },

  fetchStoriesEnd: () => {
    return {
      type: actionTypes.FETCH_STORIES_END
    }
  },

  updateStories: (stories: IStory[] ) => {
    return {
      type: actionTypes.UPDATE_STORIES,
      payload: mockStories
    }
  },

  loadStories: () => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());
      return Promise.resolve(mockStories).then((stories)=>{
        dispatch(actionCreators.fetchStoriesEnd());
        dispatch(actionCreators.updateStories(stories));
      });
    }
  }
} 