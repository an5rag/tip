import * as React from 'react';
import { match } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IStory, StoriesLoadStatusEnum } from './../../../../../services/redux/stories/interfaces';
import { StoryBox, IStoryBoxProps } from './story-box';

interface IStoryGridProps {
  stories: { [storyId: string]: IStory };
  loadStatus: StoriesLoadStatusEnum;
  match: match<any>;
  loadStories: () => void;
}
export class StoryGrid extends React.Component<IStoryGridProps, any> {
  componentWillMount() {
    this.props.loadStories();
  }

  render() {
    const storyGrid = [];

    for (let storyId in this.props.stories) {
      const story = this.props.stories[storyId];
      storyGrid.push(
        <Link to={`${this.props.match.url}/${storyId}`} key={storyId}>
          <StoryBox  title={story.title} author={story.author} tags={story.tags} illustrator={story.illustrator} image={story.images? story.images.grid : undefined}/>
        </Link>
      )
    }

    return (
      <div className="tip-story-grid">
        {storyGrid}
      </div>
    );
  }
}