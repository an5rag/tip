import * as React from "react";
import * as DocumentTitle from "react-document-title";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import { StoryGridContainer } from "./scenes/story-grid/story-grid-container";
import { StoryContainer } from "./scenes/story/story-container";

export class Stories extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Route exact path={this.props.match.url} component={StoryGridContainer} />
        <Route path={`${this.props.match.url}/:storyId`} component={StoryContainer} />
      </div>
    );
  }
}
