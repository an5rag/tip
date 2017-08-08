import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
import { TipLink } from "../../building-blocks/tip-link";

export const Home = () =>
  <div className="tip-home">
    <div className="row row-center">
      <div className="small-12 medium-10 columns">
        <div className="row tip-home-section">
          <div className="small-12 columns tip-home-subsection">
            <img
              src="http://technorhetoric.net/20.2/reviews/almjeld-et-al/media/images/feministreview.png" />
          </div>
        </div>
        <div className="row tip-home-section">
          <div className="small-12 large-6 columns tip-home-subsection">
            <div className="tip-home-massive-heading">
              {/* <BbAnimatedText strings={["We're breaking gender stereotypes in the everyday classroom.", "We tell children stories."] } infinite={true} iterations={10} characterTimeout={5} /> */}
              We're breaking gender stereotypes in the everyday classroom.
            </div>
          </div>
          <div className="small-12 large-6 columns tip-home-subsection">
            <p>
              Three alumni of the Young India Fellowship and everyday feminists, <TipLink label="Meghna" link="https://www.facebook.com/meghna.chaudhury" />, <TipLink label="Aliysha" link="https://www.facebook.com" />, and <TipLink label="Sudhamshu" link="https://www.facebook.com/sudhamshu.mitra" /> started the Irrelevant Project with the simple,
            challenging vision of breaking gender stereotypes in the everyday classroom.
            </p>
            <p>
              Having faced the oppression and the limitations of the patriarchal society, the three feminists aim to change the narrative for the coming generation through story-telling and gender-sensitization workshops for children.
            </p>
          </div>
        </div>

      </div >
    </div>
    <div className="tip-home-ticker-container">
      <div className="tip-home-ticker">
        Everyday people perturbed, angry, dismayed at the current trend of affairs.
      </div>
    </div>
    <div className="row row-center">
      <div className="small-12 medium-10 columns">
        <div className="row tip-home-section">
          <div className="small-12 columns tip-home-subsection">
            <img
              src="http://sbrownehr.com/wp-content/uploads/2016/01/cropped-Peace-Signs.jpg" />
          </div>
        </div>
        <div className="row tip-home-section">
          <div className="small-12 large-12 columns tip-home-subsection">
            <div className="tip-home-subsection-heading">
              Who are we?
          </div>
            <p>
              Everyday feminists furiously determined to change the patriarchal narrative woven blatantly/ camouflaged benevolently in the everyday happenings of the Indian society.
              To be specific, we have an unwavering resolve to change this narrative especially for little humans.
          </p>
            <p>
              This project is the outcome of the collective human spirit. See the faces on the top?
              We are them. We are everyday people perturbed, angry, dismayed at the current trend of affairs.
              We are designers, engineers, students, entrepreneurs. We are tired of venting, facebook sharing, posting. We want to do more. We want the next generation of children to be fierce to who they are, irrespective, irrelevant of their gender.
          </p>
            <p>
              This is us, for them.
          </p>

          </div>
        </div>
        <div className="row tip-home-section row-wrap-reverse">
          <div className="small-12 large-6 columns tip-home-subsection">
            <div className="tip-home-subsection-heading">
              How are we doing this?
          </div>
            <p>
              Stories. Fiction. Weaving, creating, coloring, showcasing, exposing the possibility of the alternate narrative. An inclusive narrative.
            </p>
            <p>
              A kind, empathetic, understanding, power - aversive narrative. We create little superstars (see what we did there? We removed the non inclusive word - superhero)
            for children to idolize and fall in love with. Superstars who are Indian, inquisitive and problem solving. Superstars challenging the status quo.
            Superstars we can guarantee you will fall in love with.
          </p>
          </div>
          <div className="small-12 large-6 columns tip-home-subsection">
            <img
              src="https://feministphilosophers.files.wordpress.com/2012/03/line2-29-10-620x418.jpg" />
          </div>
        </div>

        <div className="row tip-home-section">
          <div className="small-12 columns tip-home-subsection">
            <div className="tip-home-subsection-heading">
              Tell me more!
            </div>
            <p>
              If you buy one of our books, you’ll get a beautiful, fully illustrated picture book taking you through an exciting journey along with the protagonist.
              As you read the story and see the images, you’ll see how we used the psychology principle of priming to get the reader to see the alternate narrative.
              You’ll see little clues here and there of a boy playing with a doll and a girl playing with a car.
            </p>
            <p>
              We were very inspired by academic research that said that gender identity is most malleable in the age group of  7- 10.
              This is why are stories are for the young readers. Each book ends with some little reflective exercises for the child to pursue.
              We are starting off with 5 books at the moment, but as we grow and more writers and illustrators join us, we will have more books for you to buy and indulge in.
            </p>
          </div>
        </div>

        <div className="row tip-home-section row-wrap-reverse">
          <div className="small-12 large-6 columns tip-home-subsection">
            <div className="tip-home-subsection-heading">
              Likewise?
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
              Talk to us; we don't bite.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >