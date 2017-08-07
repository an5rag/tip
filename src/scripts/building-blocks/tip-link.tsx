import * as React from "react";

export const TipLink = (props: { label: string; link: string; external?: boolean }) => {
  return (
    <span className="tip-link">
      <a href={props.link}>
        {props.label}
      </a>
    </span>
  )
}