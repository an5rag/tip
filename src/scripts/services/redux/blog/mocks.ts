import { IBlogPost, IBlogState } from "./interfaces";
import * as _ from "lodash";

const mockStories: Array<IBlogPost> = [
  {
    id: "big-book-of-why",
    title: "Big Book of Why",
    synopsis: "Against the background of an evolving middle class family living in Delhi, the protagonist, Anvesha, a 7 year old girl living in Delhi, learns the art of asking questions.",
    author: {
      name: "Ashwini Ashokkumar"
    },
    illustrator: {
      name: "Roopsha Mandal"
    },
    note: {
      author: "",
      details: "",
      illustrator: ""
    },
    tags: ["inclusive", "children", "curiosity", "questions", "social issues", "gender"]
  },
  {
    id: "dont-pull-my-cheeks",
    title: "Don’t Pull my Cheeks!",
    synopsis: "Bibloo, a thoughtful child, takes the user on a fun, hilarious journey as he tries different tricks and techniques to stop the pesky Jon uncle from pulling his cheeks.",
    author: {
      name: "Meghna Chaudhury"
    },
    illustrator: {
      name: "Pranita Kocherakar"
    },
    note: {
      author: "",
      details: "",
      illustrator: ""
    },
    tags: ["Consent", "touch", "Problem solving", "choice", "no"]
  },
  {
    id: "the-curious-case-of-mohit-and-rumi-the-rabbit",
    title: "The Curious Case of Mohit and Rumi the Rabbit",
    synopsis: "In a world where there are rigid definitions of acceptable body types, this story is about an 8 year old body positive activist.",
    author: {
      name: "Varsha Varghese"
    },
    illustrator: {
      name: "Sonaksha Iyengar"
    },
    note: {
      author: "",
      details: "",
      illustrator: ""
    },
    tags: ["Body positive", "dreams", "magic", "self love"]
  },
  {
    id: "nila-and-najam",
    title: "Nila and Najam",
    synopsis: "Nila and Najam break gender stereotypes by dreaming dreams that are gender non-normative.",
    author: {
      name: "Ashwini Ashokkumar"
    },
    illustrator: {
      name: "Anushka Jajodia"
    },
    note: {
      author: "",
      details: "",
      illustrator: ""
    },
    tags: ["dreams", "toys", "feminist", "teacher", "scientist"]
  },
  {
    id: "annie-and-arjun",
    title: "Annie and Arjun ",
    synopsis: "This story is a heartwarming, simple story of two children, Annie and Arjun who are puzzled by the assignment of chores to them and see it as a problem that stops them from spending time with each other.",
    author: {
      name: "Varsha Varghese"
    },
    illustrator: {
      name: "Twisha Maniar"
    },
    note: {
      author: "",
      details: "",
      illustrator: ""
    }
  }
]

export const delayPromise = (delay: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, delay);
  })
}

export const getAllStories = (delay?: number) => delayPromise(delay)
  .then(() => { return mockStories; })

export const getStory = (storyId: string, delay?: number) => {
  return delayPromise(delay)
    .then(() => { return _.find(mockStories, (story) => { return story.id === storyId }); })
}