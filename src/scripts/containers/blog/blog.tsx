import * as React from 'react';
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
export const Blog = () => (
<div className="row" style={{ width: "90vh"}}>
    <div className="tip-heading" style={{ width: "100%", paddingBottom: "20px", borderBottom:"0.5px solid black"  }}>
      <div className="tip-heading-text">
        de Finibus Bonorum et Malorum!
      </div>

      <div className="tip-meta-text">
        LLAMA KING |<BbAnimatedText strings={[ " 03/29/17", " MARCH 29 2017"]} />
      </div>
    </div>

    <div className="row" style={{ width: "90vh" }}>
      <img
        src="https://www.washingtonpost.com/graphics/national/feminism-project/feminism-typology-quiz/img/fem-grid-faces-hp-promo.jpg"
        style={{
          width: "100%",
          height: "65%",
          marginBottom: "30px"

        }}
      />
    </div>

    <div className="tip-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
)