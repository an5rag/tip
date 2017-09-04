import * as React from 'react';
import { Route } from "react-router-dom";
import { StoryContainer } from "./scenes/story/story-container";
import { StoryGridContainer } from "./scenes/story-grid/story-grid-container";


export class Stories extends React.Component<any, any> {
  render() {
    return (
      <div className="row row-center">
        <div className="small-12 columns tip-stories">
          <Route exact path={this.props.match.url} component={StoryGridContainer} />
          <Route path={`${this.props.match.url}/:storyId`} component={StoryContainer} />
        </div>
      </div>
    );
  }
}