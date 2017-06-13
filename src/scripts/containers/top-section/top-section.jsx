import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Title } from './components/title';


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
    <div style={{marginBottom: "20px"}}>
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
    </div>
);