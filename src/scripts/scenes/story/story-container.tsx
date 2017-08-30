import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { match } from 'react-router-dom';

import { Story } from "./components/story";
import { actionCreators } from './../../services/stories/actions';
import { IStory, IStoriesLoadStatus } from './../../services/stories/interfaces';
interface IStoryContainerProps {
  stories?: IStory[];
  loadStatus?: IStoriesLoadStatus;
  match: match<{storyId: string}>;
  loadStory?: (storyId: string) => null;
}
export class StoryWrapper extends React.Component<IStoryContainerProps, any> {
  componentWillMount() {
    this.props.loadStory(this.props.match.params.storyId);
  }

  getStory(storyId: string) {
    return this.props.stories.find((story) => { return story.id === storyId })
  }

  render() {
    const story = this.getStory(this.props.match.params.storyId);
    return (
      <Story
        id={this.props.match.params.storyId}
        title={story && story.title}
        synopsis={story && story.synopsis}
        illustrator={story && story.illustrator}
        author={story && story.author}
      />
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
)(StoryWrapper);
