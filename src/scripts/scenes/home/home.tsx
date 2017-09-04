import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
import { TipLink } from "../../building-blocks/tip-link";
import { TeamGrid, ITeamGridProps } from "./components/team-grid";
import { teamMembers } from "./team-members";

const homePageGirl = require("./static/home-page-girl.jpg");


export const Home = () => {

  const homeGallery = <TeamGrid members={teamMembers.members} />;

  return (
    <div className="tip-home">

      <div className="row row-center">
        <div className="small-12 columns">
          {homeGallery}
        </div>
      </div>

      <div className="row row-center">
        <div className="small-12 medium-10 columns">
          <div className="row tip-home-section">
            <div className="small-12 large-6 columns tip-home-subsection">
              <div className="tip-home-massive-heading">
                We're breaking gender stereotypes in the everyday classroom.
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
          We are everyday people, committed to a nonviolent, constructive protest against gender stereotypes.
      </div>
      </div>

      <div className="row row-center">
        <div className="small-12 medium-10 columns">
          <div className="row tip-home-section">
            <div className="small-12 columns tip-home-subsection">
              <img
                src="http://www.kenaston.org/images-referee/Books-Wide.png" />
            </div>
          </div>
          <div className="row tip-home-section">
            <div className="small-12 large-12 columns tip-home-subsection">
              <div className="tip-home-subsection-heading">
                Who are we?
          </div>
              <p>
                We are everyday feminists, deeply determined to create a kinder, inclusive world for little children to grow up in.
              </p>
              <p>
                We are engineers, designers, students, illustrators, entrepreneurs, psychologists, journalists - a collective excited by the thought of unpacking, unraveling and then, metamorphosing the dominant patriarchal narrative into a thoughtful, humane one. Individually and together, we have ventured to see a world shredded of its limitations, of its boundaries. We have worked voluntarily, and urgently to nurture this little world of ours. We wanted to share this world, invite you to be a part of it from the moment we started working on it, and here we are. Welcome. What you see here  is the fruition of the collective’s unwavering efforts to create a world where the next generation of children can be fierce to who they are - irrespective, irrelevant of their gender.
              </p>
            </div>
          </div>
          <div className="row tip-home-section row-wrap-reverse">
            <div className="small-12 large-6 columns tip-home-subsection">
              <div className="tip-home-subsection-heading">
                How are we doing this?
          </div>
              <p>
                Stories. Fiction. Weaving, creating, coloring, showcasing, and exposing the possibility of the alternate narrative. An inclusive narrative.
            </p>
              <p>
                A kind, empathetic, understanding, power - an aversive narrative. We create little superstars (just like we removed the non inclusive word here - superhero)
            for children to idolize and fall in love with. Superstars who are Indian, inquisitive and problem solvers. Superstars challenging the status quo.
            Superstars we can guarantee you will fall in love with.
          </p>
            </div>
            <div className="small-12 large-6 columns tip-home-subsection">
              <img
                src="https://feministphilosophers.files.wordpress.com/2012/03/line2-29-10-620x418.jpg" />
            </div>
          </div>

          <div className="row tip-home-section">
          <div className="small-12 large-6 columns tip-home-subsection">
              <img src={homePageGirl}/>
            </div>
            <div className="small-12 large-6 columns tip-home-subsection">
              <div className="tip-home-subsection-heading">
                The Storybooks.
            </div>
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
              <div className="tip-home-subsection-heading">
                Reach out.
            </div>
              <p>
                We are a growing group of people and in a constant search for more illustrators, authors, publishers and just anyone who
              believes in what we believe in.
            </p><p>
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