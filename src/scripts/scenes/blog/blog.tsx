import * as React from "react";
import * as DocumentTitle from "react-document-title";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { BlogHome } from "./scenes/home/blog-home";
import { BlogPost } from "./scenes/post/post";
import { BlogWrite } from "./scenes/write/write";


import { ArchiveContainer } from "./scenes/archive/archive-container";

const Tab = (props: any) => (
  <NavLink
    to={props.link}
    className="bb-tab shrink columns"
    activeClassName="bb-tab-active"
  >

    {props.name}
  </NavLink>
);

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
      <DocumentTitle title="Blog - The Irrelevant Project">
        <div className="tip-blog">
          <Switch>
            <Redirect from="/blog" exact to="/blog/home" />
            <Route path={`${this.props.match.url}/write`} render={(props) => (<BlogWrite />)} />
            <Route path={`${this.props.match.url}/home`} render={(props) => (<BlogPost />)} />
            <Route path={`${this.props.match.url}/archive`} component={ArchiveContainer} />
            <Route exact path={`${this.props.match.url}/post`} component={ArchiveContainer} />
            <Route path={`${this.props.match.url}/post/:blogId`} render={() => (<BlogPost />)} />
          </Switch>
        </div>
      </DocumentTitle>
    );
  }
}
