import * as React from "react";

interface IBbAnimatedColorText {
    text: string;
}
export const BbAnimatedColorText = (props: IBbAnimatedColorText) => {
    const splitText = props.text.split("").map((char, index) => (
        <span>{char}</span>
    ));
    return (
        <span className="anim-text-flow">
            {splitText}
        </span>
    );
};
