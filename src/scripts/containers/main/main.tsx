import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { Header } from "./header/header";
import { Home } from '../home/home';
import { Stories } from '../stories/stories';
import { Talk } from '../talk/talk';
import { Blog } from '../blog/blog'

const Routes = () =>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/stories" component={Stories} />
    <Route path="/talk" component={Talk} />
    <Route path="/blog" component={Blog} />
  </div>;

export const Main = () => (
  <div>
    <Header/>
    <Routes />
  </div>
);

