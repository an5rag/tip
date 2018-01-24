import * as React from "react";
const FaAngleDown = require("react-icons/lib/fa/angle-down");
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { BbDropDown, BbDropdownPositions } from "../../../building-blocks/bb-dropdown-menu";
import { Title } from "./components/title";

const NavElement = (props: INavElementProps) => {
    return (
        <div className="shrink columns tip-nav-element">
            {props.elements ? <NavGroupElement {...props} /> : <NavLinkElement {...props} />}
        </div>
    );
};

const NavLinkElement = (props: INavElementProps) => {
    return (
        <div className="tip-nav-link">
            <NavLink
                to={props.link}
                activeClassName="tip-nav-link-active"
            >
                <span className="label">{props.displayName}</span>
            </NavLink>
        </div>
    );
};
export interface INavElementProps {
    link?: string;
    displayName: string;
    elements?: INavElementProps[];
}

const NavGroupElement = (props: INavElementProps) => {
    let parentElement;
    if (props.link) {
        parentElement = (
            <NavLink
                to={props.link}
            >
                {props.displayName}
            </NavLink>
        );
    } else {
        parentElement = props.displayName;
    }
    const parent = (
        <div className="tip-nav-link">
            {parentElement}
            <span className="dropdown-arrow">
                <FaAngleDown />
            </span>
        </div>
    );

    const elements = props.elements.map((navElement, i) => {
        return (
            <NavLinkElement key={i} link={navElement.link} displayName={navElement.displayName} />

        );
    });

    const child = (
        <div>
            {elements}
        </div>
    );

    return (
        <BbDropDown
            parentElement={parent}
            childElement={child}
            containerClasses="shrink columns tip-nav-group"
            parentClasses="tip-nav-group-parent" childClasses="tip-nav-group-child"
            openOnMouseEnter={true}
            closeOnMouseLeave={true}
            closeOnChildClick={true}
        />
    );
};
export interface IHeaderProps {
    showNavBar: boolean;
}

export const Header = (props: IHeaderProps) => {
    const navBar = (
        <div className="tip-nav">
            <NavElement displayName="About"
                elements={[
                    {
                        displayName: "About",
                        link: "/about"
                    },
                    {
                        displayName: "FAQ",
                        link: "/faq"
                    },
                    {
                        displayName: "Team",
                        link: "/team"
                    }
                ]}
            />
            <NavElement link="/stories" displayName="Books" />
            <NavElement displayName="More"
                elements={[
                    {
                        displayName: "Contact",
                        link: "/contact"
                    },
                    {
                        displayName: "Press",
                        link: "/press"
                    }
                ]}
            />
        </div>
    );
    return (
        <div className="row align-center">
            <div className="small-12 medium-10 large-9 columns tip-header ">
                <Link to="/">
                    <Title />
                </Link>
                {props.showNavBar ? navBar : null}
            </div>
        </div>
    );
};
