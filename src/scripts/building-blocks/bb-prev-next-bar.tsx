import * as React from "react";
import { TipLink } from "./tip-link";
const LeftArrow = require("react-icons/lib/md/arrow-back");
const RightArrow = require("react-icons/lib/md/arrow-forward");

interface IPrevNextBarProps {
  prevLink?: {
    to: string;
    label: string;
  };
  nextLink?: {
    to: string;
    label: string;
  };
}

export class BBPrevNextBar extends React.Component<IPrevNextBarProps, any> {

  render() {
    const prevElement = this.props.prevLink ?
      <TipLink classes="element" to={this.props.prevLink.to}>
        <LeftArrow />
        <span className="back-label">
          {this.props.prevLink.label}
        </span>
      </TipLink> : null;

    const nextElement = this.props.nextLink ?
      <TipLink classes="element" to={this.props.nextLink.to}>
        <span className="next-label">
          {this.props.nextLink.label}
        </span>
        <RightArrow />
      </TipLink> : null;

    return (
      <div className="bb-prev-next-bar">
        {prevElement}
        {nextElement}
      </div>
    );
  }
}
