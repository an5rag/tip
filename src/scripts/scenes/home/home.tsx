import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
import { TipLink } from "../../building-blocks/tip-link";
import { TeamGrid, ITeamGridProps } from "./components/team-grid";
import { FrictionBoxes } from "./components/friction-boxes";
import { teamMembers } from "./team-members";
const img = {
  booksLarge: require("./static/books.jpg"),
  booksMedium: require("./static/books-medium.jpg"),
};

const homePageGirl = require("./static/home-page-girl.jpg");


export const Home = () => {

  const homeGallery = <TeamGrid members={teamMembers.members} />;

  return (
    <div className="tip-home">

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
            yet challenging vision of breaking gender stereotypes in the everyday classroom.
            </p>
              <p>
                Having faced the oppression and the limitations of the patriarchal society, the project founders aim to change the narrative for the coming generation through story-telling and gender-sensitization workshops for children.
            </p>
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
                We are engineers, designers, students, illustrators, entrepreneurs, psychologists, journalists who are  excited by the possibility of  replacing the patriarchal and prejudiced worldview dominant in our society with a humane and empathetic worldview. We  aspire to develop a world that’s devoid of biases that have oppressed people and lives . We have worked on this project voluntarily, and with a sense of urgency. We invite you to be a part of this initiative aiming to create a world which allows the next generation of children to be who they are. A world in which their gender, caste, and other identities are irrelevant.
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
              <img src={homePageGirl} />
            </div>
            <div className="small-12 large-6 columns tip-home-subsection">
              <h1 className="tip-home-subsection-heading">
                The Storybooks.
            </h1>
              <p>
                If you buy one of our books, you’ll get a beautiful, fully illustrated picture book taking you through an exciting journey along with the protagonist.
              We’ve woven stories around characters who are from different parts of India and the imagery reflects this - in the choice of clothing, in the language used, and even the food mentioned!
              As you read the story and see the images, you’ll see how we used the <TipLink label="psychology principle of priming" link="https://explorable.com/priming" /> to get the reader to see the alternate narrative.
              You’ll see little clues here and there - a boy playing with a doll, a girl playing with a car, the attire of the mother, the task of the father.
            </p>
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
                Let us know you're interested by writing to us <TipLink label="here" link="#" />.
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