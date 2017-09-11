import * as React from 'react';
import { match } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IStory, StoriesLoadStatusEnum } from './../../../../../services/redux/stories/interfaces';
import { StoryBox, IStoryBoxProps } from './story-box';

interface IStoryGridProps {
  stories: IStory[];
  loadStatus: StoriesLoadStatusEnum;
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
          <StoryBox key={index} title={story.title} author={story.author} tags={story.tags}  illustrator={story.illustrator}/>
        </Link>
      )
    });

    return (
      <div className="tip-story-grid">
        {storyGrid}
      </div>
    );
  }
}