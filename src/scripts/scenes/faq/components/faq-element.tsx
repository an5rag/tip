import * as React from "react";
import { BbCollapse } from "../../../building-blocks/bb-collapse";
import { BbImage } from "../../../building-blocks/bb-image";
import {
  BbHeadingThree,
  BbText,
} from "../../../building-blocks/bb-page-elements";

interface IFaqElementState {
  open: boolean;
}

export interface IFaqElementProps {
  question: string;
  answer: Array<React.ReactElement<any>>;
}
export class FaqElement extends React.Component<IFaqElementProps, IFaqElementState> {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  private handleClick = (event: React.SyntheticEvent<HTMLHeadingElement>) => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const question = (
      <div onClick={this.handleClick} className={`question ${this.state.open ? "open" : ""}`}>
        <BbHeadingThree >
          {this.props.question}
        </BbHeadingThree>
      </div>
    );
    const answer = this.props.answer.map((answerElement, index) => {
      return (
        <BbText key={index}>
          {answerElement}
        </BbText>
      );
    });
    return (
      <div>
        {question}
        <BbCollapse isOpen={this.state.open} classes="answer">
          {answer}
        </BbCollapse>
      </div>
    );
  }
}
