import * as React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { BbAnimatedColorText } from "./../../../building-blocks/bb-animated-color-text";

export const Footer = () => (
    <div className="tip-footer">
        {/* <div className="row">
            <div className="tip-footer-section small-6 large-3 columns">
                <h3 className="tip-footer-section-title">STORIES</h3>
                <h4 className="tip-footer-section-subtitle">
                    All Stories
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    Latest Story
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    First Story
                </h4>
            </div>
            <div className="tip-footer-section small-6 large-3 columns">
                <h3 className="tip-footer-section-title">
                    BLOG
                </h3>
                <h4 className="tip-footer-section-subtitle">
                    All Blogs
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    Latest Blog
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    Write a Blog
                </h4>
            </div>
            <div className="tip-footer-section small-6 large-3 columns">
                <h3 className="tip-footer-section-title">
                    VOLUNTEER
                </h3>
                <h4 className="tip-footer-section-subtitle">
                    Apply as a Writer
                </h4>

                <h4 className="tip-footer-section-subtitle">
                    Apply as an Illustrator
                </h4>
            </div>
            <div className="tip-footer-section small-6 large-3 columns">
                <h3 className="tip-footer-section-title">
                    EXTERNAL
                </h3>
                <h4 className="tip-footer-section-subtitle">
                    Facebook
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    Twitter
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    Instagram
                </h4>
                <h4 className="tip-footer-section-subtitle">
                    Contact us
                </h4>
            </div>
        </div> */}
        <div className="row">
            <div className="tip-title">
                <div className="tip-title-copyright">© The Irrelevant Project 2017-2018</div>
                <div className="tip-title-banner">
                    <BbAnimatedColorText text="the irrelevant project" />
                </div>
            </div>
        </div>
    </div>
);
