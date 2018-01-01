import * as React from "react";

interface IBbImageProps {
  src: string;
  size: "large" | "medium" | "small";
  caption?: string;
}

export class BbImage extends React.Component<IBbImageProps, any> {
  render() {
    const caption = this.props.caption ? (<figcaption>{this.props.caption}</figcaption>) : null;
    const classes = `bb-image-${this.props.size}`;
    return (
      <span className={classes}>
        <figure>
          <img src={this.props.src} />
          {caption}
        </figure>
      </span>
    );
  }
}
