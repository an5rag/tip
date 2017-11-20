import * as React from 'react';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { BlogHome } from "./scenes/home/blog-home";
import { BlogPost } from "./scenes/post/post"

import { ArchiveContainer } from "./scenes/archive/archive-container";

const Tab = (props: any) => (
  <NavLink
    to={props.link}
    className="bb-tab shrink columns"
    activeClassName="bb-tab-active"
  >

    {props.name}
  </NavLink>
)

export const BbTabs = () => (
  <div className="row">
    <Tab link={`/blog/home`} name="Home" />
    <Tab link={`/blog/archive`} name="Archive" />
    <Tab link={`/blog/search`} name="Search" />
  </div>
);
export class Blog extends React.Component<any, any> {
  render() {
    return (
      <div className="tip-blog">
        <div className="row row-center">
          <div className="small-12 medium-7 columns ">
            <BbTabs />
          </div>
        </div>
        <Switch>
          <Redirect from="/blog" exact to="/blog/home" />
          <Route path={`${this.props.match.url}/write`} render={(props) => (<div>sdfhsdf</div>)} />
          <Route path={`${this.props.match.url}/home`} render={(props) => (<BlogHome />)} />
          <Route path={`${this.props.match.url}/archive`} component={ArchiveContainer} />
          <Route path={`${this.props.match.url}/post/:blogId`} render={() => (<BlogPost/>)} />
        </Switch>
      </div>
    );
  }
}