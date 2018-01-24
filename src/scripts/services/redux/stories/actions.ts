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
  SET_CURRENT_STORY: "SET_CURRENT_STORY",
  SET_PREV_STORY: "SET_PREV_STORY",
  SET_NEXT_STORY: "SET_NEXT_STORY"
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

      return storiesRef.orderByChild("index").once("value")
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
          let prevStory: IStory;
          let nextStory: IStory;
          if (story !== null) {
            // dispatch(actionCreators.updateStory(storyId, story));
            actionCreators.loadStoryByIndex((story.index + 1))
              .then((s) => {
                nextStory = s;
                return actionCreators.loadStoryByIndex(story.index - 1);
              })
              .then((s) => {
                prevStory = s;
                dispatch(actionCreators.setCurrentStory(story, prevStory, nextStory));
                dispatch(actionCreators.fetchStoriesEnd());
              });
          } else {
            dispatch(actionCreators.fetchStoriesError(FetchError.NOT_FOUND_ERROR));
          }
        }, (error) => {
          dispatch(actionCreators.fetchStoriesError(FetchError.SERVER_ERROR));
          console.error("Server error: ", error.message);
        });
    };
  },

  loadStoryByIndex: (index: number) => {
    return storiesRef.orderByChild("index").equalTo(index).limitToFirst(1).once("value")
      .then((snapshot) => {
        const value = snapshot.val();
        let story: IStory;
        for (const key in value) {
          if (value.hasOwnProperty(key) && value) {
            story = value[key];
            story.id = key;
          }
        }
        return story;
      });
  },

  setCurrentStory: (story: IStory, prevStory?: IStory, nextStory?: IStory) => {
    return {
      type: actionTypes.SET_CURRENT_STORY,
      payload: { story, prevStory, nextStory }
    };
  }
};
