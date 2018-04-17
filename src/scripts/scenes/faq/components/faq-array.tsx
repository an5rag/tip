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
        answer: [
          <BbParagraph>
            The irrelevant project began in 2016 by Meghna Chaudhary and Alishya Almeida.
          </BbParagraph>,
          <BbParagraph>
            We have an entire <TipLink to="/about">page</TipLink> for what we do.
          </BbParagraph>
        ]
      },
      {
        question: "Who are the Irrelevants?",
        answer: [

          <BbParagraph>
            Visit them <TipLink to="/team">here</TipLink>!
            </BbParagraph>,
          <BbParagraph>
            Each one of them has been instrumental in making tip what it is.
            </BbParagraph>

        ]
      },
      {
        question: "Why does the logo look like a 3?",
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
            Our labour is a patchwork made by the constant dialogue of threes.
            It is also the reverse of the summation sign (Σ), for while we are a collection of our experiences,
            at TIP we want to think seriously about going beyond one’s experiences,
            to be ‘outside’ oneself in order to understand culture and identity.
          </BbParagraph>

        ]
      },
      {
        question: "How many books are there in the first round?",
        answer: [
          <BbParagraph>
            We have <strong>five</strong> fully illustrated picture books for 6, 7 and 8 year olds in the first round. You can check them out <TipLink to="/stories">here</TipLink>.
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
            <TipLink to="https://www.amazon.in/s/ref=a9_sc_1?rh=i%3Aaps%2Ck%3Athe+irrelevant+project&keywords=the+irrelevant+project&ie=UTF8&qid=1522664477" external={true}>You can find us on Amazon.</TipLink>
          </BbParagraph>
        ]
      },
      {
        question: "Can I purchase your books in bulk?",
        answer: [
          <BbParagraph>
            Oh yes, please do! We also offer <TipLink to="stories/box-set-vol-1">box sets</TipLink>.
          </BbParagraph>
        ]
      },
      {
        question: "Why is it taking me so long to receive my order?",
        answer: [
          <BbParagraph>
            We are sorry for the delay.
           </BbParagraph>,
          <BbParagraph>
            We send out orders every Tuesday and Friday and email you the airwaybill (AWB) number within 5 days of ordering through our website.
            </BbParagraph>,
          <BbParagraph>
            Our estimate for deliveries in India is <strong>10-15 business days</strong>. If it takes longer than that, please <TipLink to="/contact">write to us</TipLink> with the header - “Order: Order-date: Product:” and we shall try being super-quick and hustle your books right to your doorstep.
          </BbParagraph>

        ]
      },
      {
        question: "Can I return my books for a refund?",
        answer: [
          <BbParagraph>
            We are so sorry, but that is not possible at the moment. However, we would love some <TipLink to="/contact">constructive feedback</TipLink>. Tell us why you didn’t like the books and we will take your opinion seriously.
          </BbParagraph>
        ]
      },
      {
        question: "Can I get my books replaced?",
        answer: [
          <BbParagraph>
            Yes. If there is any damage to the physical quality of the book, which includes - empty pages, torn pages, blurry print, we are more than happy to replace the set for you.
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
            Our secure payments are powered by Amazon. Please visit their <TipLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201895620" external={true}>troubleshooting page for payments.</TipLink>
          </BbParagraph>
        ]
      },
      {
        question: "What happened to Instamojo?",
        answer: [
          <BbParagraph>
            We are stopped selling on Instamojo and have moved to the more widely used platform - Amazon.
          </BbParagraph>
        ]
      }
    ]
  }
];
