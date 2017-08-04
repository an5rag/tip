import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";

export const Home = () => <div>
  <div className="row row-center">
    <div className="small-12 medium-10 columns tip-home">
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
            Stereotypical beliefs about gender, which rigidly characterize differences
              between sexes and appropriate gender roles, are pervasive in most societies.
              These deep-seated beliefs reflect the society’s expectations that individuals
              behave and make choices in accordance with their gender. Examples of gender
              stereotyped beliefs and how they are reflected in behaviors and attitudes
              abound. They can be expressed in parents choosing rigidly-gendered toys for
              their children or steering them (subtly or blatantly) toward certain educational
              and occupational choices that are deemed to be suitable for their gender.
            </p>
        </div>
      </div>

      <div className="row tip-home-section row-wrap-reverse">
        <div className="small-12 large-6 columns tip-home-subsection">
          <div className="tip-home-subsection-heading">
            Why is this a real problem?
            </div>
          <p>
            Through the inter-generational transmission of preferences and beliefs, families
              have the earliest, most direct impact on the development of children’s cognitive
              and social development. The channels of such transmission could be outright
              didactic teaching (indoctrination) or a more indirect influence via parenting
              styles (including the language used with the kids) and providing role models.
              Examples for the former would be iterating what girls should and should not do,
              and discouraging male-typed behavior (girls are taught to be more obedient, kind
              and sharing), and examples for the latter would be a family where household
              chores are females’ responsibility and males have more say in important
              decisions.
            </p>
        </div>
        <div className="small-12 large-6 columns tip-home-subsection">
          <img
            style={{
              width: "100%",
              height: "auto"
            }}
            src="http://bloximages.chicago2.vip.townnews.com/dailyuw.com/content/tncms/assets/v3/editorial/d/06/d06b2394-839b-11e6-9543-1f393d66c391/57e89a6749ea5.image.jpg?resize=1200%2C944" />
        </div>
      </div>

      <div className="row tip-home-section">
        <div className="small-12 large-6 columns tip-home-subsection">
          <img
            style={{
              width: "100%",
              height: "auto"
            }}
            src="http://1.darkroom.stylist.co.uk/980/0631dc4d2a1386d0514f81b330ec61de:e44d18f472fcbb44095d9e17ce1a1ffd/simpsons-sex-ed.png" />
        </div>
        <div className="small-12 large-6 columns tip-home-subsection">
          <div className="tip-home-subsection-heading">
            How are we solving it?
            </div>
          <p>
            Use stories to retell the narrative. Stories are illustrated and set in the
              Indian setting ( so you won’t find a robert or a nora in the stories). Stories
              have characters who are brown skinned, hairy, wear gender neutral clothing, make
              choices, learn about consent etc. Illustrations were damn important for our work
              - without it the story would fail Gender workshops - this is what we piloted
              with in a school in Delhi. We created like this very simple workbook where 2
              characters take the child through a journey of understanding gender and in the
              same vein, developing their emotional literacy. We cover topics like
              commonalities, uniqueness, acceptance, emotional literacy.
            </p>
        </div>
      </div>
    </div>
  </div>
</div>