import React from "react";
import { BbAnimatedText } from "bb/bb-animated-text";

export const Title = () => {
  const title = "the irrelevant project";
  const breakTitle = function(title) {
    const chars = title.split("");
    return chars.map((element, index) => <span key={index}>{element}</span>);
  };

  const titleBackgroundTextMatrix = [
    [
      ["women", "girls", "ladies"],
      ["may not", "must not", "shall not"],
      ["expose", "impose", "code"]
    ],
    [
      ["kids", "children", "young adults"],
      ["must", "need to", "are expect to"],
      ["respect", "obey", "comply"]
    ],
    [
      ["men", "boys", "gentlemen"],
      ["should not", "may not", "must not"],
      ["cry", "cook", "care"]
    ],
    [
      ["women", "girls", "ladies"],
      ["may not", "must not", "shall not"],
      ["expose", "impose", "code"]
    ],
    [
      ["kids", "children", "young adults"],
      ["must", "need to", "are expect to"],
      ["respect", "obey", "comply"]
    ],
    [
      ["men", "boys", "gentlemen"],
      ["should not", "may not", "must not"],
      ["cry", "cook", "care"]
    ],
    [
      ["women", "girls", "ladies"],
      ["may not", "must not", "shall not"],
      ["expose", "impose", "code"]
    ],
    [
      ["kids", "children", "young adults"],
      ["must", "need to", "are expect to"],
      ["respect", "obey", "comply"]
    ],
    [
      ["men", "boys", "gentlemen"],
      ["should not", "may not", "must not"],
      ["cry", "cook", "care"]
    ]
  ];

  const titleBackground = (
    <div className="title-background-text">
      {titleBackgroundTextMatrix.map(row => {
        let column = row.map(column => (
          <div className="title-background-text-row-element">
            <BbAnimatedText strings={column} />
          </div>
        ));
        column = column.concat(
          <div className="title-background-text-row-element">
            <BbAnimatedText strings={["should not", "may not", "must not"]} />
          </div>
        );
        return <div className="title-background-text-row">{column}</div>;
      })}
    </div>
  );

  const titleForeground = (
    <div className="title-foreground-text">
      <div className="title-foreground-text-row">
        THE
      </div>
      <div className="title-foreground-text-row anim-text-flow">
        {breakTitle("IRRELEVANT")}
      </div>
      <div className="title-foreground-text-row">
        PROJECT
      </div>
    </div>
  );

  return (
    <div className="tip-title">
    </div>
  );
};
