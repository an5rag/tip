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
          <div className="small-12 medium-10 columns">
          <BbNotice type="secondary" title="Welcome to the project, irrelevant"content="Thanks for visiting our website. We are still in the alpha phase and working hard to finish what we set out for. Till then, you might encounter broken links and placeholder texts." />
          </div>
        </div>
        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            {homeGallery}
          </div>
        </div>
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

        <div className="tip-home-ticker-container">
          <div className="tip-home-ticker">
            We are everyday people committed to constructing a world without gender stereotypes.
      </div>
        </div>

        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <div className="row tip-home-section">
              <div className="small-12 columns tip-home-subsection">
                <picture>
                  <source media="(min-width: 650px)" srcSet={img.booksLarge} />
                  <source media="(max-width: 649px)" srcSet={img.booksMedium} />
                  <img alt="Irrelevant Project books strung on a rope." />
                </picture>
              </div>
            </div>
            <div className="row tip-home-section">
              <div className="small-12 large-12 columns tip-home-subsection">
                <h1 className="tip-home-subsection-heading">
                  Who are we?
          </h1>
                <p>
                  We are <b>everyday feminists</b>, deeply determined to create a <b>kind and inclusive world</b> for little children to grow up in.
              </p>
                <p>
                  We are engineers, designers, students, illustrators, entrepreneurs, psychologists, journalists who are excited by the possibility of replacing the patriarchal and prejudiced worldview dominant in our society with a humane and empathetic worldview. We aspire to develop a world that’s devoid of biases that have oppressed people and lives. We have worked on this project voluntarily, and with a sense of urgency.
                  </p><p>We invite you to be a part of this initiative aiming to create a world which allows the next generation of children to be who they are. A world in which their gender, caste, and other identities are irrelevant.
              </p>
              </div>
            </div>
            <div className="row tip-home-section row-wrap-reverse">
              <div className="small-12 large-6 columns tip-home-subsection">
                <h1 className="tip-home-subsection-heading">
                  How are we doing this?
          </h1>
                <p>
                  Fiction. Stories. We are weaving stories and characters, coloring them, to create in children’s minds an imagination of a better world. An inclusive world. A kind and empathetic world.
              </p>
                <p>
                  We hope that these stories will create little superstars for children to fall in love with and mimic. In the process, we’ll create inquisitive little Indian superstars who are eager to ask difficult questions, willing to challenge the status quo, and able to solve problems.
          </p>
              </div>
              <div className="small-12 large-6 columns tip-home-subsection">
                <img
                  src="https://feministphilosophers.files.wordpress.com/2012/03/line2-29-10-620x418.jpg" />
              </div>
            </div>

            <div className="row tip-home-section">
              <div className="small-12 large-6 columns tip-home-subsection">
                <img src={img.homePageGirl} />
              </div>
              <div className="small-12 large-6 columns tip-home-subsection">
                <h1 className="tip-home-subsection-heading">
                  The Storybooks.
            </h1>
                <p>
                  Our story books are full of illustrations that take readers on exciting journeys with our protagonists. The characters in our stories come from various parts of India, which is reflected in the imagery of the stories’ scenes.
                  The stories are constructed based on psychology research to ensure that the child imbibes values central to the stories.
                  For instance, little cues that defy common stereotypes are placed in the background to create in the child’s mind a sense of familiarity with new ideas. Each book ends with some reflective exercises for the child to engage with. </p>
                <p>
                  We are starting off with 5 books at the moment, but as we grow and more writers and illustrators join us, we will have more books for you to buy and indulge in.
            </p>
              </div>
            </div>

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
