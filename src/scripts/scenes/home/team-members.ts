import { ITeamGridProps } from "./components/team-grid";
const img = {
  anurag: require("./static/anurag.jpg"),
  meghna: require("./static/meghna.jpg"),
  aliysha: require("./static/aliysha.jpg"),
  sudhamshu: require("./static/sudhamshu.jpg"),
  varsha: require("./static/varsha.jpg"),
  ashwini: require("./static/ashwini.jpg"),
  pranita: require("./static/pranita.jpg"),
  roopsha: require("./static/roopsha.jpg"),
  twisha: require("./static/twisha.jpg"),
  anushka: require("./static/anushka.jpg"),
  sonaksha: require("./static/sonaksha.jpg"),
  pallavi: require("./static/pallavi.jpg"),
  aakriti: require("./static/aakriti.jpg"),
  harish: require("./static/harish.jpg"),
  varun: require("./static/varun.jpg"), 
};

export const teamMembers: ITeamGridProps = {
  members: [
    {
      src: img.aliysha,
      name: "Aliysha Almeda",
      role: "Co-founder, Queer Activist",
      link: "https://medium.com/@alishyaalmeida"
    }, {
      src: img.meghna,
      name: "Meghna Chaudhury",
      role: "Co-founder, Learning Experience Designer",
      link: "https://medium.com/@meghnachaudhury"
    }, {
      src: img.sudhamshu,
      name: "Sudhamshu Mitra",
      role: "Chief researcher, Blogger, Activist",
      link: "https://www.youthkiawaaz.com/author/sudhamshu_mitra/"
    }, {
      src: img.varsha,
      name: "Varsha Varghese",
      role: "Author, Founder of Wordsworth project",
      link: "https://www.youtube.com/watch?v=ZnERyntytSc"
    }, {
      src: img.ashwini,
      name: "Ashwini Ashokkumar",
      role: "Author, Social psychologist, Wannabe poet",
      link: "https://ashwiniashokkumar.com/"
    }, {
      src: img.pranita,
      name: "Pranita Kocharekar",
      role: "Illustrator, Influencer, Mental Health Activist",
      link: "https://www.instagram.com/pranitart/?hl=en"
    }, {
      src: img.roopsha,
      name: "Roopsha Manda",
      role: "Illustrator, Design Student, Freelancer",
      link: "https://www.behance.net/roopiedoo"
    }, {
      src: img.twisha,
      name: "Twisha Maniar",
      role: "Illustrator, Founder of Carousel",
      link: "https://www.facebook.com/carousel.india"
    }, {
      src: img.anushka,
      name: "Anuskha Jajodia",
      role: "Illustrator, Design Student, Freelancer",
      link: "https://www.behance.net/anushkajajodia"
    }, {
      src: img.sonaksha,
      name: "Sonaksha Iyengar",
      role: "Illustrator, Author, Mental Health and Body-Positive Activist",
      link: "https://www.instagram.com/sonaksha/"
    }, {
      src: img.pallavi,
      name: "Pallavi Prasad",
      role: "Journalist, Editor, Personal Cheerleader",
      link: "https://www.facebook.com/pallaviprsd/"
    }, {
      src: img.aakriti,
      name: "Aakriti Pasricha",
      role: "Mental Health Activist, Editor",
      link: "http://alittleromancewithlife.blogspot.in/2012/04/if-only-my-rational-mind-would-let-me.html"
    }, {
      src: img.harish,
      name: "Harish Balan",
      role: "Investor, Personal Cheerleader, Brand Strategist"
    }, {
      src: img.anurag,
      name: "Anurag Choudhary",
      role: "Web Designer, Engineer, Teacher",
      link:"http://anuragchoudhary.com"
    }, {
      src: img.varun,
      name: "Varun Mukerji",
      role: "Founder of withinreach.in, Basketball Enthusiast",
      link: "https://www.withinreach.in/"
    },
  ]
};