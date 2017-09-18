import { Promise } from "es6-promise";

import { IStory, IStoriesState } from "./interfaces";
import { firebase } from "../../firebase/firebase";

// creating story firebase ref
const storiesRef = firebase.database().ref("stories/");

export const actionTypes = {
  FETCH_STORIES_START: "FETCH_STORIES",
  UPDATE_STORIES: "UPDATE_STORIES",
  FETCH_STORIES_END: "FETCH_STORIES_COMPLETE",
  UPDATE_STORY: "UPDATE_STORY",
  SET_CURRENT_STORY: "SET_CURRENT_STORY"
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

  updateStories: (stories: { [storyId: string]: IStory }) => {
    return {
      type: actionTypes.UPDATE_STORIES,
      payload: stories
    }
  },

  updateStory: (id: string, story: IStory) => {
    return {
      type: actionTypes.UPDATE_STORY,
      payload: { id, story }
    }
  },
  

  loadStories: () => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());

      return storiesRef.once('value')
        .then((snapshot) => {
          const stories: { [storyId: string]: IStory } = snapshot.val();
          dispatch(actionCreators.fetchStoriesEnd());
          dispatch(actionCreators.updateStories(stories));
        }, (error) => {
          dispatch(actionCreators.fetchStoriesEnd());
          console.error("Server error: ", error.message);
        });
    }
  },

  loadStory: (storyId: string) => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());
      const storyRef = storiesRef.child(storyId);
      return storyRef.once('value')
        .then((snapshot) => {
          const story: IStory = snapshot.val();
          dispatch(actionCreators.fetchStoriesEnd());
          // only update if story is not null
          if (story !== null) {
            dispatch(actionCreators.updateStory(storyId, story));
          }
        }, (error) => {
          dispatch(actionCreators.fetchStoriesEnd());
          console.error("Server error: ", error.message);
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