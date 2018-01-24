import * as React from "react";
import { BbCollapse } from "../../../building-blocks/bb-collapse";
import { BbImage } from "../../../building-blocks/bb-image";
import {
  BbBigText,
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
      <BbBigText >
        <div onClick={this.handleClick} className={`question ${this.state.open ? "open" : ""}`}>
          {this.props.question}
        </div>
      </BbBigText>
    );
    return (
      <div>
        {question}
        <BbCollapse isOpen={this.state.open} classes="answer">
          <BbText classes="no-margin">
            {this.props.answer}
          </BbText>
        </BbCollapse>
      </div>
    );
  }
}
