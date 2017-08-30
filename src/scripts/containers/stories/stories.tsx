import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux'

import { StoryContainer } from '../story/story';
import { StoryBox, IStoryBoxProps } from './components/story-box';
import { SearchBar, ISearchBarProps } from './components/search-bar';
import { actionCreators } from './../../services/stories/actions';
import { IStory, IStoriesLoadStatus } from './../../services/stories/interfaces';

interface IMatch {
  url: string;
  params: any[];
}

interface IStoriesProps {
  stories: IStory[];
  loadStatus: IStoriesLoadStatus;
  match: IMatch;
  loadStories: () => null;
}
export class Stories extends React.Component<IStoriesProps, any> {
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

const mapStateToProps = (state, ownProps) => {
  return {
    stories: state.stories.stories,
    loadStatus: state.stories.loadStatus,
    match: ownProps.match
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadStories: () => {
      dispatch(actionCreators.loadStories());
    }
  }
}

export const StoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);

