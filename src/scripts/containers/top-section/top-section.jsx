import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import { Title } from 'components/title/title';
import { Home } from 'containers/home/home';
import { Stories } from 'containers/stories/stories';
import { Talk } from 'containers/talk/talk';
import { Blog } from 'containers/blog/blog'


const styles = {
    navBarStyles: {
        marginTop: "1rem",
        marginBottom: "1rem"        
    },
    navElementStyles: {
        fontSize: "0.9em",
        fontFamily: "'Fira Sans', sans-serif",
        color: "#aaaaaa",
        ":hover": "{color:red}"
    }
}

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/stories" component={Stories}/>
    <Route path="/talk" component={Talk}/>
    <Route path="/blog" component={Blog}/>
  </div>
)

const NavElement = (props) => (
     <div className="shrink columns" style={styles.navElementStyles}>
                <NavLink 
                    to={props.link}
                    activeStyle={{
                        color: 'white'
                    }}
                >
                    {props.name}
                </NavLink>
    </div>
)

export const TopSection = () => (
  <BrowserRouter>
    <div>
        <div className="row">
            <Link to="/">
                <Title/>
            </Link>
        </div>
        <div className="row" style={styles.navBarStyles}>
           <NavElement link="/stories" name="Stories"/>
           <NavElement link="/talk" name="Talk"/>
           <NavElement link="/blog" name="Blog"/>              
        </div>
        <Routes/>
        </div>
  </BrowserRouter>
);