import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { match } from 'react-router-dom';

import { StoryContainer } from '../story/story-container';
import { StoryBox, IStoryBoxProps } from './components/story-box';
// import { SearchBar, ISearchBarProps } from './components/search-bar';
import { actionCreators } from './../../services/stories/actions';
import { IStory, IStoriesLoadStatus } from './../../services/stories/interfaces';


interface IStoryGridProps {
  stories: IStory[];
  loadStatus: IStoriesLoadStatus;
  match: match<any>;
  loadStories: () => null;
}
export class StoryGrid extends React.Component<IStoryGridProps, any> {
  componentWillMount() {
    this.props.loadStories();
  }

  render() {
    const storyGrid = this.props.stories.map((story, index) => {
      return (
        <Link to={`${this.props.match.url}/${story.id}`} key={index}>
          <StoryBox key={index} title={story.title} author={story.author} />
        </Link>
      )
    });

    return (
      <div className="row row-center">
        <div className="small-12 columns tip-stories">
          <Route path={`${this.props.match.url}/:storyId`} component={StoryContainer} />
          <Route exact path={this.props.match.url} render={() => (
            <div>
              <div className="tip-story-grid">
                {storyGrid}
              </div>
            </div>
          )} />
        </div>
      </div>
    );
  }
}

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

export const StoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryGrid);

