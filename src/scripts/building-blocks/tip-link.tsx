import * as React from "react";

import { Link } from "react-router-dom";

export interface ITipLinkProps {
  to: string;
  external?: boolean;
  classes?: string;
}

export class TipLink extends React.Component<ITipLinkProps, any> {
  public static defaultProps: Partial<ITipLinkProps> = {
    external: false,
    classes: "tip-link"
  };

  public render() {
    const linkElement = this.props.external ?
      (<a href={this.props.to}>
        {this.props.children}
      </a>) :
      (<Link to={this.props.to}>{this.props.children}</Link>);
    return (
      <span className={this.props.classes}>
        {linkElement}
      </span>
    );
  }
}
