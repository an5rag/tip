import * as React from "react";
import * as DocumentTitle from "react-document-title";

interface IBbPageProps {
  documentTitle: string;
  classes: string;
}

export class BbPage extends React.Component<IBbPageProps, any> {
  render() {
    return (
      <DocumentTitle title="FAQ. - The Irrelevant Project">
        <div className={`row align-center bb-page ${this.props.classes}`}>
          <div className="small-12 medium-10 large-9 columns">
            {this.props.children}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export class BbTitle extends React.Component<any, any> {

  render() {
    return (
      <h1 className="bb-title">
        {this.props.children}
      </h1>
    );
  }
}
export class BbHeadingTwo extends React.Component<any, any> {

  render() {
    return (
      <h3 className="bb-heading-two">
        {this.props.children}
      </h3>
    );
  }
}

export class BbHeadingThree extends React.Component<any, any> {

  render() {
    return (
      <h3 className="bb-heading-three">
        {this.props.children}
      </h3>
    );
  }
}

export class BbParagraph extends React.Component<any, any> {

  render() {
    return (
      <p className="bb-paragraph">
        {this.props.children}
      </p>
    );
  }
}

export class BbContent extends React.Component<any, any> {

  render() {
    return (
      <div className="bb-content">
        {this.props.children}
      </div>
    );
  }
}

export class BbSection extends React.Component<any, any> {

  render() {
    return (
      <div className="bb-section">
        {this.props.children}
      </div>
    );
  }
}

export class BbText extends React.Component<any, any> {

  render() {
    return (
      <div className="bb-text">
        {this.props.children}
      </div>
    );
  }
}
