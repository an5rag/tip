import * as React from "react";
import { BbButton } from "../../building-blocks/bb-button";
import { BbImage } from "../../building-blocks/bb-image";
import {
  BbContent,
  BbHeadingTwo,
  BbPage,
  BbParagraph,
  BbSection,
  BbText,
  BbTitle
} from "../../building-blocks/bb-page-elements";
import { TipLink } from "../../building-blocks/tip-link";
import { BbNotice } from "./../../building-blocks/bb-notice";

export class About extends React.Component<any, any> {

  render() {
    return (
      <BbPage documentTitle="About" classes="tip-about"
        meta={
          {
            description: "What the Irrelevant Project is all about, and about the Irrelevant dream",
            url: `${this.props.match.url}`
          }
        }>
        <BbTitle classes="center">
          about the project.
        </BbTitle>
        <BbContent>
          {/* <BbSection className="big-margin">
            <BbText>
              <BbParagraph>
                The Irrelevant Project was founded in 2016 by Meghna Chaudhury and Alishya Almeida in an attempt to bring about inclusivity in children.
                Officially opening the online store to the public in January 2018, the cofounders are confident in and believe that they have at least one possible offering to combat the conflict in the landscape.
              </BbParagraph>
            </BbText>
          </BbSection> */}
          <BbSection className="big-margin">
            <div className="row align-center">
              <div className="columns heading-column small-12 medium-6">
                <BbHeadingTwo>
                  What are we troubled by?
                </BbHeadingTwo>
                <BbImage size="large" src="http://i276.photobucket.com/albums/kk34/feministing/boyvgirls.jpg" caption="Picture Courtesy: I’m Glad I’m a Boy! I’m Glad I’m a Girl!" altText="Gender biases in kids: Doctors should be boys" />
              </div>
              <div className="columns small-12 medium-6">
                <BbText>
                  <ul>
                    <li>
                      The stereotypes we find in all kinds of books for children that perpetuate various kinds of biases surrounding gender/class/caste/religion etc, which the children mimic as part of learned behavior.
                  </li>
                    <li>
                      The many ways in which we realize the education we receive does not account for the challenges children face in their everyday cultural contexts, equipping them with neither critical thinking nor emotional reasoning.
                      </li>
                    <li>
                      How children learn to discriminate based on identity, and perpetuate teasing, bullying and other forms of aggression towards one another, as early as age four.
                    </li>
                    <li>
                      By an environment that limits imagination. Books and media for children repeatedly reinforce certain narratives which constrict children to thinking in boxes and categories.
                    </li>
                  </ul>

                </BbText>
              </div>
            </div>
          </BbSection>
          <BbSection className="big-margin">
            <div className="row align-center">
              <div className="columns heading-column small-12 medium-6">
                <BbHeadingTwo>
                  What do we see?
                </BbHeadingTwo>
              </div>
              <div className="columns small-12 medium-6">
                <BbText>
                  <ul>
                    <li>
                      The problems are not uniform.
                  </li>
                    <li>
                      We cannot preempt the ways in which gender intersects class, religion and other holders of identity in different locations/spaces of learning/classrooms.
                  </li>
                    <li>
                      There is no one solution. But we can make an effort to interrupt  various kinds of prejudice we face and reduce its strong hold.
                  </li>
                  </ul>
                </BbText>
              </div>
            </div>
          </BbSection>
          <BbSection className="big-margin">
            <div className="row align-center">
              <div className="columns heading-column small-12 medium-6">
                <BbHeadingTwo>
                  How are we grappling with overcoming biases and stereotypes?
                </BbHeadingTwo>
                <BbImage size="large" src="https://pbs.twimg.com/media/DTUykkXVQAEOa04.jpg" />

              </div>
              <div className="columns small-12 medium-6">
                <BbText>
                  <ul>
                    <li>
                      <strong>Fiction</strong>: Currently, we have 5 books in our repository that are centered around different topics of prejudice for age groups 6 - 8.
                    <BbButton label="SEE BOOKS" className="wide button" linkTo="stories" />
                    </li>
                    <li>
                      <strong>Collaterals</strong>: We are working on a repository of content/activities for a facilitator/teacher to conduct discussions related to the content covered in the books. The collaterals are available for some of the books including <TipLink to="stories/big-book-of-why">The Big book of Why</TipLink> and <TipLink to="stories/dont-pull-my-cheeks">Don’t pull my cheeks</TipLink>.
                    </li>
                  </ul>
                </BbText>

              </div>
            </div>
          </BbSection>
          <BbSection className="big-margin">
            <div className="row align-center">
              <div className="columns heading-column small-12 medium-6">
                <BbHeadingTwo>
                  What next?
                </BbHeadingTwo>

              </div>
              <div className="columns small-12 medium-6">
                <BbText>
                  <ul>
                    <li>
                      <strong>Collaboration</strong>: We hope to open conversations around the themes of prejudice, education and culture. We are looking for collaborations with classrooms and teachers this year.
                      <TipLink to="contact"> Reach out to us </TipLink> and tell us more!

                    </li>
                    <li>
                      <strong>Feedback</strong>: We invite educators to use our material and provide us constructive feedback so that we can keep iterating/evolving and together build a strong framework for interrupting prejudice.
                    </li>
                  </ul>
                </BbText>
              </div>
            </div>
          </BbSection>
        </BbContent>
      </BbPage>
    );
  }
}
