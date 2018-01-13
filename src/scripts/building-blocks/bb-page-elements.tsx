import * as React from "react";
import * as DocumentTitle from "react-document-title";
import { Helmet } from "react-helmet";
const booksImageUrl = require("./../../resources/images/books.jpg");


interface IBbPageProps {
  documentTitle: string;
  classes: string;
  columns?: {
    small: number;
    medium?: number;
    large?: number;
  };
  meta: {
    url: string;
    type?: "product" | "website" | "article";
    description: string;
    imageUrl?: string;
  };
}

export class BbPage extends React.Component<IBbPageProps, any> {
  private static defaultProps: Partial<IBbPageProps> = {
    columns: {
      small: 12,
      medium: 10,
      large: 9
    }
  };

  render() {
    const columns = `small-${this.props.columns.small}
    medium-${this.props.columns.medium || this.props.columns.small}
    large-${this.props.columns.large || this.props.columns.medium || this.props.columns.small} columns`;
    return (
      <div className={`row align-center bb-page ${this.props.classes || ""}`}>
        <Helmet>
          <title>{this.props.documentTitle || "Loading"} - The Irrelevant Project</title>
          <meta property="og:url" content={`https://theirrelevantproject.com${this.props.meta && this.props.meta.url}`} />
          <meta property="og:type" content={this.props.meta && this.props.meta.url || "website"} />
          <meta property="og:title" content={this.props.documentTitle} />
          <meta property="og:description" content={this.props.meta && this.props.meta.description} />
          <meta property="og:image" content={this.props.meta && this.props.meta.imageUrl || booksImageUrl} />
        </Helmet>
        <div className={columns}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export class BbTitle extends React.Component<any, any> {

  render() {
    return (
      <h1 className={`bb-title ${this.props.classes || ""}`}>
        {this.props.children}
      </h1>
    );
  }
}
export class BbHeadingTwo extends React.Component<any, any> {

  render() {
    return (
      <h2 className={`bb-heading-two ${this.props.classes || ""}`}>
        {this.props.children}
      </h2>
    );
  }
}

export class BbHeadingThree extends React.Component<any, any> {

  render() {
    return (
      <h3 className={`bb-heading-three ${this.props.classes || ""}`}>
        {this.props.children}
      </h3>
    );
  }
}

export class BbHeadingFour extends React.Component<any, any> {

  render() {
    return (
      <h4 className={`bb-heading-four ${this.props.classes || ""}`}>
        {this.props.children}
      </h4>
    );
  }
}

export class BbBigText extends React.Component<any, any> {

  render() {
    return (
      <div className={`bb-big-text ${this.props.classes || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class BbParagraph extends React.Component<any, any> {

  render() {
    return (
      <p className={`bb-paragraph ${this.props.classes || ""}`}>
        {this.props.children}
      </p>
    );
  }
}

export class BbContent extends React.Component<any, any> {

  render() {
    return (
      <div className={`bb-content ${this.props.classes || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class BbSection extends React.Component<any, any> {
  render() {
    return (
      <div className={`bb-section ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class BbSubSection extends React.Component<any, any> {
  render() {
    return (
      <div className={`bb-sub-section ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class BbText extends React.Component<any, any> {
  render() {
    return (
      <div className={`bb-text ${this.props.classes || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class BbDivider extends React.Component<any, any> {

  render() {
    return (
      <div className={`bb-divider-container`} >
        <div className={`bb-divider ${this.props.classes || ""}`} />
      </div>
    );
  }
}


