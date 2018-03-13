import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { match } from "react-router-dom";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import { BbButton } from "../../../../../building-blocks/bb-button";
import {
  BbBigText,
  BbContent,
  BbDivider,
  BbHeadingFour,
  BbHeadingThree,
  BbHeadingTwo,
  BbPage,
  BbParagraph,
  BbSection,
  BbSubSection,
  BbText,
  BbTitle
} from "../../../../../building-blocks/bb-page-elements";
import { IStory, StoriesLoadStatusEnum } from "./../../../../../services/redux/stories/interfaces";
import { Loading } from "./../../../../loading/loading";
import { IStoryBoxProps, StoryBox } from "./story-box";

interface IStoryGridProps {
  stories: { [storyId: string]: IStory };
  loadStatus: StoriesLoadStatusEnum;
  match: match<any>;
  loadStories: () => void;
}
export class StoryGrid extends React.Component<IStoryGridProps, any> {
  componentWillMount() {
    this.props.loadStories();
  }

  render() {

    const storiesArray: IStory[] = [];

    for (const storyId in this.props.stories) {
      if (this.props.stories.hasOwnProperty(storyId)) {
        const story = this.props.stories[storyId];
        story.id = storyId;
        storiesArray.push(story);
      }
    }
    storiesArray.sort((story1, story2) => {
      return story1.index < story2.index ? 0 : 1;
    });

    const storyGrid = storiesArray.map((story, index) => {
      return (
        <StoryBox
          title={story.title}
          author={story.author}
          tags={story.tags}
          illustrator={story.illustrator}
          image={story.images ? story.images.thumbnail : undefined}
          key={index}
          linkTo={`${this.props.match.url}/${story.id}`}
        />
      );
    });

    let mainContent =
      <div className="tip-story-grid row align-center">
        {storyGrid}
      </div>;

    switch (this.props.loadStatus) {
      case StoriesLoadStatusEnum.FETCHING: mainContent = <Loading />; break;
      case StoriesLoadStatusEnum.COMPLETE: mainContent = mainContent; break;
      default: mainContent = <Loading />; break;
    }

    return (
      <BbPage documentTitle={"Story Books"} classes="tip-stories"
        meta={
          {
            description: "Fully illustrated stories for children",
            url: `${this.props.match.url}`
          }
        }>
        <BbTitle classes="center">
          story books.
        </BbTitle>
        <BbContent>
          <BbSection>
            {mainContent}
          </BbSection>
          <BbSection>
            <div className="row align-center">
              <div className="columns small-10 medium-11">
                <BbButton
                  label={`GO TO STORE`}
                  linkTo="https://www.instamojo.com/readmore/"
                  linkExternal={true}
                  className="wide"
                />
              </div>
            </div>
          </BbSection>
        </BbContent>
      </BbPage >
    );
  }
}
