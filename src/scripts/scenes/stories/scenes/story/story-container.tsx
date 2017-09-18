import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { match } from 'react-router-dom';
import * as _ from "lodash";

import { Story } from "./components/story";
import { actionCreators } from './../../../../services/redux/stories/actions';
import { IRootState } from "./../../../../services/redux/root-state";

const mapStateToProps: MapStateToProps<any, any> = (state:IRootState, ownProps) => {
  return {
    story: state.stories.stories[ownProps.match.params.storyId],
    loadStatus: state.stories.loadStatus,
    match: ownProps.match,
    storyId: ownProps.match.params.storyId
  }
}

const mapDispatchToProps: MapDispatchToProps<any, any> = dispatch => {
  return {
    loadStory: (storyId: string) => {
      dispatch(actionCreators.loadStory(storyId));
    },
    setCurrentStory: (storyId: string) => {
      dispatch(actionCreators.setCurrentStory(storyId));
    }
  }
}

export const StoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
