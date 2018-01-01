import * as React from "react";
import {
  BbHeadingTwo,
  BbSection,
} from "../../../building-blocks/bb-page-elements";
import { FaqElement, IFaqElementProps } from "./faq-element";

export interface IFaqSectionProps {
  faqElementsArray: IFaqElementProps[];
  title: string;
}

export class FaqSection extends React.Component<IFaqSectionProps, any> {
  render() {
    const faqElements = this.props.faqElementsArray.map((faqElement: IFaqElementProps, index) => {
      return (
        <FaqElement {...faqElement} key={index} />
      );
    });
    return (
      <BbSection>
        <BbHeadingTwo>
          <span className="section-header">
            {this.props.title}
          </span>
        </BbHeadingTwo>
        {faqElements}
      </BbSection>
    );
  }
}
