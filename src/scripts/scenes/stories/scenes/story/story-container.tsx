import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { match } from "react-router-dom";

import { IRootState } from "./../../../../services/redux/root-state";
import { actionCreators } from "./../../../../services/redux/stories/actions";
import { IStory, StoriesLoadStatusEnum } from "./../../../../services/redux/stories/interfaces";
import { Story } from "./components/story";
interface IStoryContainerProps {
  match: match<{ storyId: string }>;
}
export interface IStoryProps {
  story?: IStory;
  nextStory?: IStory;
  loadStatus?: StoriesLoadStatusEnum;
  match: match<{ storyId: string }>;
  storyId?: string;
  loadStory?: (storyId: string) => void;
}

const mapStateToProps: MapStateToProps<IStoryProps, IStoryContainerProps, IRootState> =
  (state, ownProps) => {
    return {
      story: state.stories.currentStory,
      nextStory: state.stories.nextStory,
      loadStatus: state.stories.loadStatus,
      match: ownProps.match,
      storyId: ownProps.match.params.storyId
    };
  };

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch) => {
  return {
    loadStory: (storyId: string) => {
      dispatch(actionCreators.loadStory(storyId));
    }
  };
};

export const StoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
