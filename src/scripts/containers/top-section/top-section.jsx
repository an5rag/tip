import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Title } from './components/title';
import { Home } from 'containers/home/home';
import { Stories } from 'containers/stories/stories';
import { Talk } from 'containers/talk/talk';
import { Blog } from 'containers/blog/blog'

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/stories" component={Stories}/>
    <Route path="/talk" component={Talk}/>
    <Route path="/blog" component={Blog}/>
  </div>
)

const NavElement = (props) => (
     <div className="shrink columns tip-nav-link">
                <NavLink 
                    to={props.link}
                    activeClassName="tip-nav-link-active"
                >
                    {props.name}
                </NavLink>
    </div>
)

export const TopSection = () => (
    <div>
        <div className="row">
            <Link to="/">
                <Title/>
            </Link>
        </div>
        <div className="row">
            <NavElement link="/stories" name="Stories"/>
            <NavElement link="/talk" name="Talk"/>
            <NavElement link="/blog" name="Blog"/>              
        </div>
        <Routes/>
    </div>
);