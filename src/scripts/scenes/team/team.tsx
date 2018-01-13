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
  openElementIndex: number;
}

export class Team extends React.Component<any, ITeamState> {
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
                Hi. We are <span className="emphasis">everyday feminists,</span> deeply
                 determined to create a kind and inclusive world for little children to grow up in.
              We are engineers, designers, students, illustrators, entrepreneurs, psychologists, journalists who are excited
              by the possibility of <span className="emphasis">replacing the dominant patriarchal and prejudiced worldview
              with a kind and empathetic one</span>.
              </BbParagraph>

              <BbParagraph>
                We have worked on this project <span className="emphasis">voluntarily,</span> and
                with <span className="emphasis">a sense of urgency,</span> and invite you to be a part of this
              initiative aiming to create a world which allows the next generation of children to be who they are -
                a world in which their gender, caste, and other identities are <span className="emphasis">irrelevant.</span>
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
