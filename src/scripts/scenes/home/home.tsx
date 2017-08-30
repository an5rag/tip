import * as React from "react";
import { BbAnimatedText } from "../../building-blocks/bb-animated-text";
import { TipLink } from "../../building-blocks/tip-link";
import { MasonryGrid } from "../../building-blocks/masonry-grid";


export const Home = () => {
  const galleryImages = [
    { src: "https://media1.s-nbcnews.com/j/newscms/2016_30/1639976/160726-keith-weglin-713p_801485078c1d37cb8920b8a779546666.nbcnews-ux-2880-1000.jpg" },
    { src: "https://s-media-cache-ak0.pinimg.com/736x/77/34/91/77349132cca091f162fed320be3330d5--beautiful-people-photography-vulnerable-photography.jpg" },
    { src: "http://media.salon.com/2016/08/life_essay_catfish_featured.jpg" },
    { src: "http://i.dailymail.co.uk/i/pix/2014/10/16/1413432185738_wps_11_Kite5_jpg_face_shapes.jpg" },
    { src: "http://hairclippercenter.net/wp-content/uploads/2017/02/15-Blow-Dried-Back-Medium-Length-Hairstyle-820x1024.jpg" },
    { src: "https://d2juyu303oh9b6.cloudfront.net/image/e5fb2520eb20a5b8aa978f060d95c89c.jpg?&icq=80&sig=d84f7bff10af74c10cc30d2ed9ba5f60" },
    { src: "http://www.eva.com.ec/web/images/news/2016_07_06_16_45_22_pink-lips-girl-face_1489570183.jpg" },
    { src: "https://s-media-cache-ak0.pinimg.com/736x/f2/fb/2f/f2fb2fcc3c9b2ada37cf02af881511b1--beach-picture-ideas-alone-tumblr-photo-ideas-beach.jpg" },
    { src: "https://pbs.twimg.com/profile_images/723564356693192705/IV1fgh7G_400x400.jpg" },
    { src: "http://www.surreymirror.co.uk/images/localworld/ugc-images/276435/Article/images/30482464/16107287-large.jpg" },
    { src: "https://s-media-cache-ak0.pinimg.com/236x/d7/63/c1/d763c1b8729711eb9dda7f9704ea4738.jpg" },
    { src: "https://www.expressandstar.com/resizer/RaQGKN1G85bc75Y5D8jykZRN7wA=/248x186/filters:quality(100)/arc-anglerfish-arc2-prod-expressandstar-mna.s3.amazonaws.com/public/CRYG4XHLERBCRJV2CY2NG2SXVA.jpg" }
  ];

  const homeGallery = <MasonryGrid elements={galleryImages} />;

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
                src="http://sbrownehr.com/wp-content/uploads/2016/01/cropped-Peace-Signs.jpg" />
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
            <div className="small-12 columns tip-home-subsection">
              <div className="tip-home-subsection-heading">
                The Storybooks.
            </div>
              <p>
                If you buy one of our books, you’ll get a beautiful, fully illustrated picture book taking you through an exciting journey along with the protagonist.
              As you read the story and see the images, you’ll see how we used the psychology principle of priming to get the reader to see the alternate narrative.
              You’ll see little clues here and there of a boy playing with a doll and a girl playing with a car.
            </p>
              <p>
                We were heavily inspired by academic research that said that gender identity is most malleable in the age group of  7- 10.
              This is why are stories are for the young readers. Each book ends with some little reflective exercises for the child to pursue.
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