import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Blog } from "../../blog/blog";
import { Home } from "../../home/home";
import { Stories } from "../../stories/stories";
import { Talk } from "../../talk/talk";

export const Body = () =>
  <div className="tip-body">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route path="/talk" component={Talk} />
      <Route path="/blog" component={Blog} />
      <Route render={() => {
        return (
          <Redirect to="/404" />
        );
      }} />
    </Switch>
  </div>;
