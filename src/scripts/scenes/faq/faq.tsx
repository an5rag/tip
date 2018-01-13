import * as React from "react";
import {
  BbContent,
  BbPage,
  BbTitle
} from "../../building-blocks/bb-page-elements";
import { TipLink } from "../../building-blocks/tip-link";
import { BbNotice } from "./../../building-blocks/bb-notice";
import { faqArray } from "./components/faq-array";
import { FaqSection, IFaqSectionProps } from "./components/faq-section";


interface IFaqState {
  openElementIndex: number;
}
export class Faq extends React.Component<any, IFaqState> {
  constructor(props) {
    super(props);
    this.state = {
      openElementIndex: 0
    };
  }

  handleElementClicked = (index: number) => {
    this.setState({
      openElementIndex: index
    });
  }
  render() {
    const faq = faqArray.map((faqElement: IFaqSectionProps, index) => {
      return (
        <FaqSection {...faqElement} key={index} />
      );
    });
    return (
      <BbPage documentTitle="FAQ" classes="tip-faq"
        meta={
          {
            description: "Frequently Asked Questions",
            url: `${this.props.match.url}`
          }
        }>
        <BbTitle>
          frequently asked questions.
        </BbTitle>
        <BbContent>
          {faq}
          <BbNotice type="light" title="Have more questions?" content={(
            <div>
              Please <TipLink to="/contact" classes="link">write to us</TipLink> and we'll get back to you within 24 hours.
            </div>
          )} />
        </BbContent>
      </BbPage>
    );
  }
}
