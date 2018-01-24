import * as React from "react";
import { BbAnimatedText } from "../../../../building-blocks/bb-animated-text";
import { BbTree } from "../../../../building-blocks/bb-tree";

export const BlogPost = () => (
  <div className="row align-center tip-blog-post">
    <div className="small-12 medium-10 columns tip-blog-hero-image">
      <figure>
        <img src="https://i.pinimg.com/originals/93/0c/09/930c091c04ab8f21ff0c0b388357b023.jpg" />
      </figure>
    </div>
    <div className="small-12 medium-8 columns">
      <div className="title">
        <h1 className="tip-blog-title">
          You're probably a feminist too
      </h1>
        <h2 className="tip-blog-subtitle">
          But f*cking weak to admit it.
      </h2>
        <h5 className="tip-blog-meta">
          Anurag Choudhary | MARCH 29 2017 | TECHNOLOGY
      </h5>
      </div>

      <div className="content tip-blog-text">
        <p>
          Note: The content has nothing to do with the title. Sorry.
        </p>

        <p>My first journalism job out of college was working at Popular Mechanics magazine. I wrote about things like robots and airplanes and nuclear power. One night I met up with a friend for dinner, and she invited two male co-workers from the ad agency she worked at. I told them I worked at Popular Mechanics. One of the men seemed very confused. He seemed to think my job was strange. I asked him why, and I'll never forget his response: "Why would a cute blonde be interested in technology?"
        </p>


        <h2> 2 reasons why you cant 'man-up' </h2>
        <h3>1) Because my buddies think this is stupid.</h3>
        <p>
          He went on to say that I might as well be working at Playboy, that a woman's desire to read about tech stuff was comparable to looking at male-targeted pornography. I tried to explain that roughly half the staff at Popular Mechanics were women.
        </p>
        <blockquote>He went on to say that I might as well be working at Playboy, that a woman's desire to read about tech stuff was comparable to looking at male-targeted pornography. </blockquote>
        <p>
          My friend chimed in that she used to work on cars when she was a teenager (actual mechanics). It was dinner, so I was trapped actually defending the notion that women are human beings with varied interests. Maybe this guy had just never met a woman before.
        </p>
        <h3>2) Because I don't want to sound like a whiny p*ssy.</h3>
        <figure>
          <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/14/tmp/buzzfeed-prod-fastlane-03/tmp-name-2-30513-1491847638-4_dblbig.jpg" />
          <figcaption>Aw, look at that whiny p*ssy!</figcaption>
        </figure>
        <p>
          I was a 22-year-old editorial assistant working at a men's magazine (with, unsurprisingly, mostly male editors) when this happened. They assigned a sex advice story to me, and I approached it very professionally, treating it as I would have any other service-oriented story — looking for surprising information, speaking to solid sources, etc. And I guess the end result was pretty good, which I was proud of. Until I found out that some of the guys on staff had been talking about it behind my back, presumably as an indication of my secret kinkiness or something (even though I at no point during the writing or editing process alluded to my own sex life). The way I found out was that an editor (let's call him John) told me he'd been talking to the guy who had assigned me the story (let's call him Bob) — John said, "Bob told me about your nickname." I had no idea what he was talking about, and he initially refused to tell me more, acting very cagey and silly about it. Finally he broke down and told me (and let's say my last name is Smith) — the nickname was "Dirty, Dirty Smith."
        </p>

        <p>
          I was pretty horrified, but was a little too naive and scared at the time to do anything about it (report it to HR, etc.). Not a very good ending to that story, but I'm guessing that's unfortunately how a lot of this stuff goes — it happens, it's ridiculous and gross, and then you just move on.
        </p>
      </div>
      <div className="share-icons">
        <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a><i className="fa fa-envelope" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
);
