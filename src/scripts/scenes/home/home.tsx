import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
import { BbImageGrid, IImage } from "../../building-blocks/bb-image-grid";
import { BbNotice } from "../../building-blocks/bb-notice";
import { TipLink } from "../../building-blocks/tip-link";
import { FrictionBoxes } from "./components/friction-boxes";
import { ITeamGridProps, TeamGrid } from "./components/team-grid";
import { teamMembers } from "./team-members";

const images: IImage[] = [
  {
    src: require("./static/annie-arjun.png"),
  },
  {
    src: require("./static/annie.png"),
  },
  {
    src: require("./static/bibloo-angry.png"),
  },
  {
    src: require("./static/bibloo-shocked.png"),
  },
  {
    src: require("./static/jar.png"),
  },
  {
    src: require("./static/annie.png"),
  },
  {
    src: require("./static/bibloo-angry.png"),
  },
  {
    src: require("./static/bibloo-shocked.png"),
  },
  {
    src: require("./static/bibloo-shocked.png"),
  },
];

export class Home extends React.Component<any, any> {
  public render() {
    const homeGallery = <TeamGrid members={teamMembers.members} />;
    return (
      <div className="tip-home">

        <div className="row row-center">
          <div className="small-11 medium-10 columns">
            <BbNotice dismissable={true} type="secondary" title="Hi there!" content="Thanks for visiting our website. We are still actively developing this and working hard to finish what we set out for. Till then, you might encounter broken links and placeholder texts." />
          </div>
        </div>
        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <BbImageGrid images={images} /></div>
        </div>

        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <div className="row tip-home-section">
              <div className="small-12 large-6 columns tip-home-subsection">
                <div className="tip-home-massive-heading">
                  Interrupting
                <span style={{ color: "#e86e45" }}>  prejudice </span>
                  in spaces of everyday learning.
                </div>
              </div>
              <div className="small-12 large-6 columns tip-home-subsection">
                <p>
                  The Irrelevant Project began with the simple,
                  yet challenging vision of reducing negative stereotypes in the everyday classroom.
                </p>
                <p>
                  Its aim is to enable children to resist the script of biases by
                  developing awareness and critical thinking in them,
                  through the medium of fiction.
                </p>
              </div>
            </div>
          </div >
        </div>

        {/* <div className="tip-home-ticker-container">
          <div className="tip-home-ticker">
            We are everyday people committed to constructing a world without gender stereotypes.
          </div>
        </div> */}

        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <div className="row tip-home-section">
              <div className="small-12 medium-6 columns tip-home-subsection no-vertical-center">
                <h1 className="tip-home-subsection-heading">
                  Story Books
                </h1>
                <p className="no-padding">
                  Browse through our current collection of story books.
              </p>
                <p className="no-padding">
                  <TipLink link="/stories">Stories  <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
                </p>
              </div>

              <div className="small-12 medium-6 columns tip-home-subsection no-vertical-center">
                <h1 className="tip-home-subsection-heading">
                  Learn More
                </h1>
                <p className="no-padding">
                  Meet the Irrelevants and read about why they are doing what they are doing.
                </p>
                <p className="no-padding">
                  <TipLink link="/faq">About <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink><br />
                  <TipLink link="/faq">Frequently Asked Questions <i className="fa fa-angle-right link-icon" aria-hidden="true"></i></TipLink>
                </p>
              </div>
            </div>
            <div className="row tip-home-section row-center">
              <div className="small-10 medium-9 columns tip-home-subsection">
                <p className="light center small" >
                  If you want to talk to us and collaborate with us, please do not hesitate to reach out to us at
                    <TipLink external={true} link="mailto:theirrelevantproject@gmail.com?Subject=Hello%20Irrelevants"> theirrelevantproject@gmail.com</TipLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
