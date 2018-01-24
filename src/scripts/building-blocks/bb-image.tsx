import * as React from "react";

interface IBbImageProps {
  src: string;
  size: "large" | "medium" | "small";
  caption?: string;
  altText?: string;
  className?: string;
}

export class BbImage extends React.Component<IBbImageProps, any> {
  render() {
    const caption = this.props.caption ? (<figcaption>{this.props.caption}</figcaption>) : null;
    const classes = `bb-image-${this.props.size} ${this.props.className || ""}`;
    return (

      <figure className={classes}>
        <img src={this.props.src} alt={this.props.altText || this.props.caption || "The Irrelevant Project"} title={this.props.caption} />
        {caption}
      </figure>

    );
  }
}
