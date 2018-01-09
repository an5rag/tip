import * as React from "react";
import * as DocumentTitle from "react-document-title";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { TipLink } from "../../../building-blocks/tip-link";
import { BbAnimatedColorText } from "./../../../building-blocks/bb-animated-color-text";

import {
  BbContent,
  BbPage,
  BbTitle
} from "../../../building-blocks/bb-page-elements";

const image = require("./static/404-hero.png");
export interface INotFoundProps {
  type?: string;
}
export const NotFoundPage = (props: INotFoundProps) => {
  const type = props.type ? props.type : "page";
  const titleArray = ["Yikes!", "Rats!", "Awks.", "Shoot!"];
  const randomTitle = titleArray[Math.floor(Math.random() * titleArray.length)];
  return (
    <BbPage documentTitle={`Can't find ${type} - The Irrelevant Project`} classes="tip-404">

      <div className="row align-center align-middle row-wrap-reverse">
        <div className="columns small-12 medium-8 large-5 columns text-container">
          <h1>
            {randomTitle}
          </h1>
          <h2>
            We can't seem to find the {type} you're looking for.
            </h2>
          <p>
            Here are some helpful links instead:<br />
            <TipLink to="/">Home <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            <TipLink to="/stories">Stories <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            {/* <TipLink to="/blog">Blog <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br /> */}
            <TipLink to="/about">About <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            <TipLink to="/faq">Frequently Asked Questions <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink>
          </p>
        </div>

        <div className="columns small-12 large-5 hero-image-container">
          <img className="hero-image" src={image} />
        </div>
      </div>
    </BbPage>
  );
};
