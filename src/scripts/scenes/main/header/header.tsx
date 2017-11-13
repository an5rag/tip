import * as React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Title } from './components/title';
import { BbDropDown, BbDropdownPositions } from "../../../building-blocks/bb-dropdown-menu";


const NavElement = (props: INavElementProps) => (
    <div className="shrink columns tip-nav-link">
        <NavLink
            to={props.link}
            activeClassName="tip-nav-link-active"
        >
            <span className="label">{props.displayName}</span>
        </NavLink>
    </div>
)
export interface INavElementProps {
    link: string,
    displayName: string
}
export interface INavGroupProps {
    link?: string,
    displayName: string
    elements?: INavElementProps[]
}

const NavGroup = (props: INavGroupProps) => {
    const parent = (
        <div className="tip-nav-link">
            {props.displayName}
            <i className="fa fa-angle-down dropdown-arrow"></i>
        </div>
    )

    const elements = props.elements.map((navElement, i) => {
        return (
            <div className="row" key={i}>
                <NavElement link={navElement.link} displayName={navElement.displayName} />
            </div>
        );
    })

    const child = (
        <div>
            {elements}
        </div>
    )

    return (
        <BbDropDown parentElement={parent} childElement={child} containerClasses="shrink columns tip-nav-group" parentClasses="tip-nav-group-parent" childClasses="tip-nav-group-child" />
    )
}


export const Header = () => (
    <div className="tip-header">
        <div className="row row-center">
            <Link to="/">
                <Title />
            </Link>
        </div>
        <div className="row row-center">
            <NavGroup displayName="About"
                elements={[
                    {
                        displayName: "Our Story",
                        link: "/our-story"
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
            <NavGroup link="/more" displayName="More"
                elements={[
                    {
                        displayName: "Contact",
                        link: "/contact"
                    },
                    {
                        displayName: "Privacy Policy",
                        link: "/privacy-policy"
                    },
                ]}
            />
        </div>
    </div>
);
