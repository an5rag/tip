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
      role: "Co-founder, Queer Activist"
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
      role: "Author, Social psychologist, Amateur poet"
    }, {
      src: img.pranita,
      name: "Pranita Kocharekar",
      role: "Illustrator, Influencer, Mental Health Activist "
    }, {
      src: img.roopsha,
      name: "Roopsha Manda",
      role: "Illustrator, Design Student, Freelancer"
    }, {
      src: img.twisha,
      name: "Twisha Maniar",
      role: "Illustrator, Founder of Carousel"
    }, {
      src: img.anushka,
      name: "Anuskha Jajodia",
      role: "Illustrator, Design Student, Freelancer"
    }, {
      src: img.sonaksha,
      name: "Sonaksha Iyengar",
      role: "Illustrator, Author, Mental Health and Body-Positive Activist "
    }, {
      src: img.pallavi,
      name: "Pallavi Prasad",
      role: "Journalist, Editor, Personal Cheerleader"
    }, {
      src: img.aakriti,
      name: "Aakriti Pasricha",
      role: "Mental Health Activist, Editor"
    }, {
      src: img.harish,
      name: "Harish Balan",
      role: "Investor, personal cheerleader, brand strategist"
    }, {
      src: img.anurag,
      name: "Anurag Choudhary",
      role: "Web Designer/Developer",
      link:"http://anuragchoudhary.com"
    }, {
      src: img.varun,
      name: "Varun Mukerji",
      role: "Founder of withinreach.in, Basketball Enthusiast",
      link: "https://www.withinreach.in/"
    },
  ]
};