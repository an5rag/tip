import * as React from "react";
import { BbImage } from "../../../building-blocks/bb-image";
import {
  BbParagraph
} from "../../../building-blocks/bb-page-elements";
import { TipLink } from "../../../building-blocks/tip-link";
import { IFaqSectionProps } from "./faq-section";

const logo = require("../../../../resources/images/logo.png");

export const faqArray: IFaqSectionProps[] = [
  {
    title: "General",
    faqElementsArray: [
      {
        question: "What is the Irrelevant Project?",
        answer: [(
          <BbParagraph>
            Glad you asked! We have an entire <TipLink to="/about">page</TipLink> for it.
          </BbParagraph>
        )]
      },
      {
        question: "Who are the Irrelevants?",
        answer: [

          <BbParagraph>
            Visit them <TipLink to="/team">here</TipLink>, and drop them a message and a clap!
            </BbParagraph>,
          <BbParagraph>
            Each one of them have volunteered their service to us and we could not have been more proud or thankful at this display of human goodwill.
            </BbParagraph>

        ]
      },
      {
        question: "What’s with this 3-like logo?",
        answer: [

          <BbImage size="small" src={logo} caption="Three goes far to state an amalgamation/summation in the way we work in this project." />,

          <BbParagraph>
            Our logo divulges the way we work in this project:
                      </BbParagraph>,
          <ol>
            <li>imagination, words, images</li>
            <li>writers, illustrators, enablers</li>
            <li>psychology, pedagogy, literature</li>
          </ol>,

          <BbParagraph>
            It is also the reverse of a summation sign, for while we are a collection of our experiences,
               at TIP we want to think seriously about going beyond one’s experiences, to be ‘outside’ oneself in order to understand culture and identity.
            </BbParagraph>

        ]
      },
      {
        question: "How many books are there in the first round?",
        answer: [
          <BbParagraph>
            We have <strong>5</strong> fully illustrated picture books for 6, 7 and 8 year olds in the first round. You can check them out <TipLink to="/stories">here</TipLink>.
          </BbParagraph>
        ]
      },
      {
        question: "Will there be a next round?",
        answer: [
          <BbParagraph>
            Make it happen. Share our work. Give us a shout-out. If we sell enough, we want to come back with more books for the young ones.
          </BbParagraph>
        ]
      },
      {
        question: " Can we make this a part of the school curriculum?",
        answer: [

          <BbParagraph>
            Now you’re talking. We would love that; in fact that is one of the things we are working towards!
            </BbParagraph>,
          <BbParagraph>
            If you would like to talk to us to brainstorm on how this can be included in the daily pedagogy, please <TipLink to="/contact">write to us</TipLink> with the header “Pedagogy:”.
            </BbParagraph>

        ]
      }
    ]
  },
  {
    title: "Buying the books",
    faqElementsArray: [
      {
        question: "Where can I buy your books from?",
        answer: [
          <BbParagraph>
            <TipLink to="https://www.instamojo.com/readmore/" external={true}>Visit our store.</TipLink>
          </BbParagraph>
        ]
      },
      {
        question: "Can I purchase your books in bulk?",
        answer: [
          <BbParagraph>
            OMG, Please do.
          </BbParagraph>
        ]
      },
      {
        question: "Why is it taking me so long to receive my order?",
        answer: [

          <BbParagraph>
            We are sorry. We are brand-new at this and are trying to figure things out.
            </BbParagraph>,
          <BbParagraph>
            Our estimate for deliveries in India is <strong>10-15 business days</strong>. If it takes longer than that, please <TipLink to="/contact">write to us</TipLink> with the header - “Order:” and we shall try being super-quick and hustle your books right to your doorstep.
          </BbParagraph>

        ]
      },
      {
        question: " Can I get a refund on my books?",
        answer: [
          <BbParagraph>
            We are so sorry, but that is not possible at the moment. However, we would love some <TipLink to="/contact">constructive feedback</TipLink>. Tell us why you didn’t like the books and we will take your opinion seriously.
          </BbParagraph>
        ]
      }
    ]
  },
  {
    title: "Payment",
    faqElementsArray: [
      {
        question: "Help! My payment wouldn't go through.",
        answer: [
          <BbParagraph>
            Our secure payments are powered by Instamojo. Please visit their <TipLink to="https://support.instamojo.com/hc/en-us/articles/208508455-Payment-Failures" external={true}>troubleshooting page for payments.</TipLink>
          </BbParagraph>
        ]
      },
      {
        question: "Instamojo doesn't seem to work on my phone.",
        answer: [
          <BbParagraph>
            We're aware of problems with Instamojo on mobile devices. We're trying to reach out to them to fix the bugs. Meanwhile, please try again using your laptop or desktop computer.
          </BbParagraph>
        ]
      }
    ]
  }
];
