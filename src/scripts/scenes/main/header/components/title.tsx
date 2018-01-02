import * as React from "react";
import { BbAnimatedText } from "../../../../building-blocks/bb-animated-text";

const logo = require("../../../../../resources/images/logo.png");
export const Title = () => {
  const title = "the irrelevant project";

  return (
    <div className="tip-title">
      <img className="logo-image" src={logo} />
      <div className="logo-text">
        the irrelevant project
      </div>
    </div>
  );
};
