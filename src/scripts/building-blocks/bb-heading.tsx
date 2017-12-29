import * as React from "react";

interface IBbHeadingProps {
}

export class BbHeading extends React.Component<IBbHeadingProps, any> {

  render() {
    return (
      <h1 className="bb-heading">
        {this.props.children}
      </h1>
    );
  }
}
