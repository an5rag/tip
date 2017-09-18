import { getAllStories, getStory } from "./mocks";
import { IBlogPost, IBlogState } from "./interfaces";
import { IActionCreator } from "./../common-interfaces";
import { Promise } from "es6-promise";

export const actionTypes = {
  FETCH_STORIES_START: "FETCH_STORIES",
  UPDATE_STORIES: "UPDATE_STORIES",
  FETCH_STORIES_END: "FETCH_STORIES_COMPLETE",
  UPDATE_STORY: "UPDATE_STORY",
  SET_CURRENT_STORY: "SET_CURRENT_STORY"
}


export const actionCreators: {[actionName: string] : IActionCreator;} = {
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

  updateStories: (stories: IBlogPost[]) => {
    return {
      type: actionTypes.UPDATE_STORIES,
      payload: stories
    }
  },

  updateStory: (story: IBlogPost) => {
    return {
      type: actionTypes.UPDATE_STORY,
      payload: story
    }
  },

  loadStories: () => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());
      return getAllStories()
      .then((stories) => {
        dispatch(actionCreators.fetchStoriesEnd());
        dispatch(actionCreators.updateStories(stories));
      });
    }
  },

  loadStory: (storyId: string) => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());
      return getStory(storyId)
        .then((story) => {
          dispatch(actionCreators.fetchStoriesEnd());
          dispatch(actionCreators.updateStory(story));
        });
    }
  },

  setCurrentStory: (id: string) => {
    return {
      type: actionTypes.SET_CURRENT_STORY,
      payload: { id }
    }
  }
} 