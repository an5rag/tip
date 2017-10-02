import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
import { BbNotice } from "../../building-blocks/bb-notice";
import { TipLink } from "../../building-blocks/tip-link";
import { TeamGrid, ITeamGridProps } from "./components/team-grid";
import { FrictionBoxes } from "./components/friction-boxes";
import { teamMembers } from "./team-members";
const img = {
  booksLarge: require("./static/books.jpg"),
  booksMedium: require("./static/books-medium.jpg"),
  homePageGirl: require("./static/home-page-girl.jpg")
};

export class Home extends React.Component<any, any> {
  render() {
    const homeGallery = <TeamGrid members={teamMembers.members} />;
    return (
      <div className="tip-home">

        <div className="row row-center">
          <div className="small-11 medium-10 columns">
            <BbNotice type="secondary" title="Welcome to the project, irrelevant" content="Thanks for visiting our website. We are still in the alpha phase and working hard to finish what we set out for. Till then, you might encounter broken links and placeholder texts." />
          </div>
        </div>
        {/* <div className="row row-center">
          <div className="small-12 medium-10 columns">
            {homeGallery}
          </div>
        </div> */}
        {/* <FrictionBoxes /> */}
        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <div className="row tip-home-section">
              <div className="small-12 large-6 columns tip-home-subsection">
                <div className="tip-home-massive-heading">
                  We're breaking gender stereotypes in the everyday classroom.<span style={{ color: "indianred" }}></span>
                </div>
              </div>
              <div className="small-12 large-6 columns tip-home-subsection">
                <p>
                  The Irrelevant Project was started with the simple,
            yet challenging, vision of breaking gender stereotypes in the everyday classroom.
            </p>
                <p>
                  Having studied and understood the limitations of a patriarchal society, the project's founders aim to construct an egalitarian world for the coming generation through story-telling and gender-sensitization workshops for children.</p>
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

            <div className="row tip-home-section row-wrap-reverse">
              <div className="small-12 large-6 columns tip-home-subsection">
                <h1 className="tip-home-subsection-heading">
                  Reach out.
              </h1>
                <p>
                  We are a growing group of people and in a constant search for more illustrators, authors, publishers and just anyone who
              believes in what we believe in.
              </p>
                <p>
                  Let us know you're interested by writing to us <TipLink label="here" link="mailto:theirrelevantproject@gmail.com?Subject=Hello%20Irrelevants" />.
              </p>
              </div>

              <div className="small-12 large-6 columns tip-home-subsection">
                <div className="tip-home-massive-heading">
                  We don't <br /> bite.
            </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
};
