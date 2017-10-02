import * as React from "react";

import { Link } from 'react-router-dom';

export const TipLink = (props: { link: string; external?: boolean; children?:any }) => {
  const linkElement = props.external ?
    (<a href={props.link}>
      {props.children}
    </a>) :
    (<Link to={props.link}>{props.children}</Link>);
  return (
    <span className="tip-link">
      {linkElement}
    </span>
  )
}