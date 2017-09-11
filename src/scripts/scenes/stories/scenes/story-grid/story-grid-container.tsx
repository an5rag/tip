import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { match } from 'react-router-dom';

import { StoryContainer } from '../story/story-container';
import { actionCreators } from './../../../../services/redux/stories/actions';
import { StoryGrid } from "./components/story-grid";

const mapStateToProps: MapStateToProps<any, any> = (state, ownProps) => {
  return {
    stories: state.stories.stories,
    loadStatus: state.stories.loadStatus,
    match: ownProps.match
  }
}

const mapDispatchToProps: MapDispatchToProps<any, any> = dispatch => {
  return {
    loadStories: () => {
      dispatch(actionCreators.loadStories());
    }
  }
}

export const StoryGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryGrid);

