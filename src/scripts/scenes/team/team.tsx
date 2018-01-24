import * as React from "react";
import {
  BbContent,
  BbPage,
  BbParagraph,
  BbSection,
  BbText,
  BbTitle
} from "../../building-blocks/bb-page-elements";
import { TipLink } from "../../building-blocks/tip-link";
import { BbNotice } from "./../../building-blocks/bb-notice";
import { TeamGrid } from "./components/team-grid";
import { teamMembers } from "./team-members";

interface ITeamState {

}

export class Team extends React.Component<any, ITeamState> {

  render() {
    return (
      <BbPage documentTitle="Team" classes="tip-team" columns={{ small: 12, medium: 10, large: 10 }}
        meta={
          {
            description: "Meet the Irrelevants",
            url: `${this.props.match.url}`
          }
        }>
        <BbTitle classes="title center">
          {/* <span className="title"> */}
          meet the irrelevants.
          {/* </span> */}
        </BbTitle>
        <BbContent>
          <BbSection>
            <BbText classes="intro-text">
              <BbParagraph>
                Hello. We are everyday feminists, deeply determined to create an inclusive world for little children to grow up in.
                We are educators, engineers, designers, students, illustrators, entrepreneurs, psychologists and journalists
                who are excited by the possibility of replacing the dominant patriarchal and prejudiced narratives with
                empathetic ones, led by the tools of thinking and imagination.
              </BbParagraph>

              <BbParagraph>
                We work on this project every day with a sense of urgency, and invite you to be a part of this initiative to facilitate
               spaces which allow the next generation of children to be who they are – the possibility of living lives in which our gender, caste,
               and other identities are irrelevant in determining the futures we want for ourselves.
              </BbParagraph>
            </BbText>
          </BbSection>
          <BbSection>
            <TeamGrid members={teamMembers} />
          </BbSection>
        </BbContent>
      </BbPage>
    );
  }
}
