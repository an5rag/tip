import * as React from 'react';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

import { ArchiveContainer } from "./scenes/archive/archive-container";

const Tab = (props: any) => (
  <div className="shrink columns bb-tab">
    <NavLink
      to={props.link}
      activeClassName="bb-tab-active"
    >
      {props.name}
    </NavLink>
  </div>
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
        <div className="row row-center">
          <div className="small-12 medium-7 columns ">
            <Switch>
              <Redirect from="/blog" exact to="/blog/home" />
              <Route path={`${this.props.match.url}/home`} render={(props) => (<div>blog home</div>)} />
              <Route path={`${this.props.match.url}/archive`} component={ArchiveContainer} />
              <Route path={`${this.props.match.url}/post/:blogId`} render={() => (<div>some blog</div>)} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}