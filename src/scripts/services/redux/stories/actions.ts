import { Promise } from "es6-promise";
import { firebase } from "../../firebase/firebase";
import { FetchError, IStoriesState, IStory } from "./interfaces";

// creating story firebase ref
const storiesRef = firebase.database().ref("stories/");

export const actionTypes = {
  FETCH_STORIES_START: "FETCH_STORIES",
  UPDATE_STORIES: "UPDATE_STORIES",
  FETCH_STORIES_END: "FETCH_STORIES_COMPLETE",
  FETCH_STORIES_ERROR: "FETCH_STORIES_ERROR",
  UPDATE_STORY: "UPDATE_STORY",
  SET_CURRENT_STORY: "SET_CURRENT_STORY"
};

export const actionCreators = {
  fetchStoriesStart: () => {
    return {
      type: actionTypes.FETCH_STORIES_START
    };
  },

  fetchStoriesEnd: () => {
    return {
      type: actionTypes.FETCH_STORIES_END
    };
  },

  fetchStoriesError: (error: FetchError) => {
    return {
      type: actionTypes.FETCH_STORIES_ERROR,
      payload: { error }
    };
  },

  updateStories: (stories: { [storyId: string]: IStory }) => {
    return {
      type: actionTypes.UPDATE_STORIES,
      payload: stories
    };
  },

  updateStory: (id: string, story: IStory) => {
    return {
      type: actionTypes.UPDATE_STORY,
      payload: { id, story }
    };
  },

  loadStories: () => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());

      return storiesRef.once("value")
        .then((snapshot) => {
          const stories: { [storyId: string]: IStory } = snapshot.val();
          dispatch(actionCreators.updateStories(stories));
          dispatch(actionCreators.fetchStoriesEnd());
        }, (error) => {
          dispatch(actionCreators.fetchStoriesError(FetchError.SERVER_ERROR));
          console.error("Server error: ", error.message);
        });
    };
  },

  loadStory: (storyId: string) => {
    return (dispatch) => {
      dispatch(actionCreators.fetchStoriesStart());
      const storyRef = storiesRef.child(storyId);
      return storyRef.once("value")
        .then((snapshot) => {
          const story: IStory = snapshot.val();
          if (story !== null) {
            dispatch(actionCreators.updateStory(storyId, story));
            dispatch(actionCreators.setCurrentStory(story));
            dispatch(actionCreators.fetchStoriesEnd());
          } else {
            dispatch(actionCreators.fetchStoriesError(FetchError.NOT_FOUND_ERROR));
          }
        }, (error) => {
          dispatch(actionCreators.fetchStoriesError(FetchError.SERVER_ERROR));
          console.error("Server error: ", error.message);
        });
    };
  },

  setCurrentStory: (story: IStory) => {
    return {
      type: actionTypes.SET_CURRENT_STORY,
      payload: { story }
    };
  }
};
