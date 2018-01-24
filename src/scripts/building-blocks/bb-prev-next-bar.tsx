import * as React from "react";
import { TipLink } from "./tip-link";
const LeftArrow = require("react-icons/lib/md/arrow-back");
const RightArrow = require("react-icons/lib/md/arrow-forward");
import { DeviceType, getDeviceType } from "./../services/utils/context-providers";


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

  truncateIfLong = (label: string): string => {
    if (getDeviceType() === DeviceType.mobile || getDeviceType() === DeviceType.tablet) {
      return label.length > 21 ? label.slice(0, 21) + "..." : label;
    } else {
      return label;
    }
  }

  render() {
    const prevElement = this.props.prevLink ?
      <TipLink classes="element back" to={this.props.prevLink.to}>
        <LeftArrow />
        <div className="back-label">
          {this.props.prevLink.label}
        </div>
      </TipLink> : null;

    const nextElement = this.props.nextLink ?
      <TipLink classes="element next" to={this.props.nextLink.to}>
        <div className="next-label">
          {this.truncateIfLong(this.props.nextLink.label)}
        </div>
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
