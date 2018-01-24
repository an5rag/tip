import * as React from "react";
import {
  BbContent,
  BbPage,
  BbParagraph,
  BbSection,
  BbText,
  BbTitle
} from "../../building-blocks/bb-page-elements";
import { TipLink } from "../../building-blocks/tip-link";

export class Press extends React.Component<any, any> {

  pressElementMapper = (props: IPressElementProps, index) => {
    return (
      <PressElement {...props} key={index} />
    );
  }

  render() {
    return (
      <BbPage documentTitle="Press" classes="tip-press"
        meta={
          {
            description: "Press Coverage",
            url: `${this.props.match.url}`
          }
        }>
        <BbTitle classes="title center">
          press coverage.
        </BbTitle>
        <BbContent>
          {pressArray.map(this.pressElementMapper)}
        </BbContent>
      </BbPage>
    );
  }
}


interface IPressElementProps {
  source: string;
  url: string;
  title: string;
  date: string;
}

export class PressElement extends React.Component<IPressElementProps, any> {

  render() {
    return (
      <BbSection className="element">
        <BbText>
          <div className="source">
            {this.props.source}
          </div>
          <div className="title">
            <TipLink to={this.props.url} external={true}>
              {this.props.title}
            </TipLink>
          </div>
          <div className="date">
            {this.props.date}
          </div>
        </BbText>
      </BbSection>
    );
  }
}

const pressArray: IPressElementProps[] = [
  {
    source: "GirlTalkHQ",
    url: "http://girltalkhq.com/indian-feminist-authors-create-childrens-book-series-challenge-harmful-gender-norms/",
    title: "Indian Feminist Authors Create Children’s Book Series To Challenge Harmful Gender Norms",
    date: "January 16, 2018"
  },
  {
    source: "Vagabomb",
    url: "https://www.vagabomb.com/Feminism-Consent-More-This-New-Childrens-Literary-Project-Is-Changing-Our-Future/",
    title: "Feminism, Consent & More: This New Children’s Literary Project Is Changing Our Future",
    date: "January 14, 2018"
  },
  {
    source: "ScoopWhoop",
    url: "https://www.scoopwhoop.com/children-books-with-a-twist-irrelevant-project/#.2z0j184fl",
    title: "Instead of Fairy Tales, Kids Should Be Reading These Books About Real Issues Like Consent",
    date: "January 14, 2018"
  },
  {
    source: "The Quint",
    url: "https://www.thequint.com/lifestyle/books/five-desi-childrens-books-about-diversity-feminism-and-consent",
    title: "Five Desi Children’s Books About Diversity, Feminism and Consent",
    date: "January 13, 2018"
  },
  {
    source: "Scroll.in",
    url: "https://scroll.in/magazine/856911/beta-give-uncle-a-kiss-are-indian-parents-giving-children-mixed-signals-about-consent",
    title: "Beta, give uncle a kiss: Are Indian parents giving children mixed signals about consent?",
    date: "November 09, 2017"
  },
  {
    source: "Homegrown",
    url: "https://homegrown.co.in/article/801747/these-feminist-books-are-what-every-indian-child-needs-to-read",
    title: "The Indian Art Project That’s Bringing Feminism To Children’s Literature",
    date: "September 25, 2017"
  },
  {
    source: "Time8",
    url: "https://www.time8.in/assams-meghna-chaudhary-writes-real-stories-for-kids/",
    title: "Assam’s Meghna Chaudhary writes ‘real’ stories for kids",
    date: "August 23, 2017"
  },
];
