import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { Home } from '../../home/home';
import { Stories } from '../../stories/stories';
import { Talk } from '../../talk/talk';
import { Blog } from '../../blog/blog'

export const Body = () =>
  <div className="tip-body">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route path="/talk" component={Talk} />
      <Route path="/blog" component={Blog} />
      <Route render={() => {
        return (
          <div>
            404: Page Not found.
          </div>
        )
      }} />
    </Switch>
  </div>;

