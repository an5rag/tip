import * as React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { TipLink } from "../../../building-blocks/tip-link";
import { BbAnimatedColorText } from "./../../../building-blocks/bb-animated-color-text";
import { Footer } from "./../footer/footer";
import { Header } from "./../header/header";

const image = require("./static/404-hero.png");

export const NotFoundPage = () => {
  return (
    <div>
      <Header showNavBar={false} />
      <div className="row row-center tip-404 row-wrap-reverse">

        <div className="columns small-12 medium-5 columns">

          <h1>
            Yikes.
          </h1>
          <h2>
            We can't seem to find the page you're looking for.
          </h2>
          <p>
            Here are some helpful links instead:<br />
            <TipLink link="/home">Home <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            <TipLink link="/stories">Stories <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            <TipLink link="/blog">Blog <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            <TipLink link="/about">About <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
            <TipLink link="/faq">Frequently Asked Questions <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink>
          </p>
        </div>
        <div className="columns small-12 medium-5 hero-image-container">
          <img className="hero-image" src={image} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
