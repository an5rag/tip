import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { TopSection } from "containers/top-section/top-section";
import { Home } from 'containers/home/home';
import { Stories } from 'containers/stories/stories';
import { Talk } from 'containers/talk/talk';
import { Blog } from 'containers/blog/blog'

const Routes = () =>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/stories" component={Stories} />
    <Route path="/talk" component={Talk} />
    <Route path="/blog" component={Blog} />
  </div>;

export const Main = () => (
  <div>
    <TopSection />
    <Routes />
  </div>
);

