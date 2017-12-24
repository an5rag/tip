import * as React from "react";

import { Link } from "react-router-dom";

export const TipLink = (props: { to: string; external?: boolean; children?: any }) => {
  // default isExternal to true
  const isExternal = props.external === undefined ? true : props.external;
  const linkElement = isExternal ?
    (<a href={props.to}>
      {props.children}
    </a>) :
    (<Link to={props.to}>{props.children}</Link>);
  return (
    <span className="tip-link">
      {linkElement}
    </span>
  );
};
