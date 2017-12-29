import * as React from "react";
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
            <i className="fa fa-angle-down dropdown-arrow"></i>
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
        <div className="row align-center">
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
                        displayName: "Press",
                        link: "/press"
                    }
                ]}
            />
            <NavElement link="/stories" displayName="Stories" />
            <NavElement link="/blog" displayName="Blog" />
            <NavElement displayName="More"
                elements={[
                    {
                        displayName: "Contact",
                        link: "/contact"
                    },
                    {
                        displayName: "Privacy",
                        link: "/privacy-policy"
                    },
                ]}
            />
        </div>
    );
    return (
        <div className="tip-header">
            <div className="row align-center">
                <Link to="/">
                    <Title />
                </Link>
            </div>
            <div className="tip-nav">
                {props.showNavBar ? navBar : null}
            </div>
        </div>
    );
};
