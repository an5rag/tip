import * as React from "react";
const logo = require("../../../resources/images/logo.png");

import {
  BbPage,
} from "../../building-blocks/bb-page-elements";

export class Loading extends React.Component<any, any> {
  render() {
    return (
      <BbPage documentTitle="Loading" classes="tip-loading">
        <div className="loading-element">
          <img src={logo} />
        </div>
      </BbPage>
    );
  }
}
