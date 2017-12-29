import * as React from "react";
import * as DocumentTitle from "react-document-title";
import { BbHeading } from "../../building-blocks/bb-heading";

export class Faq extends React.Component<any, any> {
  render() {
    return (
      <DocumentTitle title="F.A.Q. - The Irrelevant Project">
        <div className="row align-center">
          <div className="small-12 columns">
            <BbHeading>
              frequently asked questions
            </BbHeading>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
