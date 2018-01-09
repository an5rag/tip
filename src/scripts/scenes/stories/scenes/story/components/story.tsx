import * as React from "react";
import ImageGallery from "react-image-gallery";
import { match } from "react-router-dom";
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
import { BBPrevNextBar } from "../../../../../building-blocks/bb-prev-next-bar";
import { TipLink } from "../../../../../building-blocks/tip-link";
import { StoriesLoadStatusEnum } from "./../../../../../services/redux/stories/interfaces";
import { DeviceType, getDeviceType } from "./../../../../../services/utils/context-providers";
import { Loading } from "./../../../../loading/loading";
import { NotFoundPage } from "./../../../../main/404/404";
import { IStoryProps } from "./../story-container";
const DownloadIcon = require("react-icons/lib/md/file-download");

export class Story extends React.Component<IStoryProps, any> {
  public static defaultProps: Partial<IStoryProps> = {

  };

  componentWillMount() {
    this.loadStory(this.props.storyId);
  }

  loadStory(storyId: string) {
    this.props.loadStory(storyId);
  }

  componentWillReceiveProps(nextProps: IStoryProps) {
    if (nextProps.match && (nextProps.storyId !== this.props.storyId)) {
      this.loadStory(nextProps.match.params.storyId);
    }
  }

  deserializeContent(content: string[]) {
    return content.map((text, index) => {
      return (
        <BbParagraph key={index}>
          {text}
        </BbParagraph>
      );
    });
  }

  deserializeSections(sections: ISection[]) {
    return sections.map((section, index) => {
      const headingElement =
        <BbHeadingTwo>
          {section.heading}
        </BbHeadingTwo>;
      const result =
        [
          <BbSection className="row align-middle align-center">
            <div className="small-12 medium-11 columns">
              {section.heading ? headingElement : null}
              <div className="section-content">
                {section.content}
              </div>
            </div>
          </BbSection>
        ];

      if (index !== sections.length - 1) {
        result.push(<BbDivider />);
      }
      return result;
    });
  }

  render() {
    const images = this.props.story ? this.props.story.images.series.map((image, index) => {
      return {
        original: image.url,
        thumbnail: image.url
      };
    }) : [];
    const sectionsArray: ISection[] = [
      {
        heading: "Reviews",
        content:
          <BbText>
            <BbParagraph classes="danger-text">
              No reviews yet.
              </BbParagraph>
            <BbParagraph>
              Want to review the book? <TipLink to="/contact">Write to us</TipLink> and we'll feature it here.
              </BbParagraph>
          </BbText>
      },
      {
        heading: "About",
        content:
          <BbText>
            {this.props.story && this.props.story.about && this.deserializeContent(this.props.story && this.props.story.about.details)}
          </BbText>
      },
      {
        heading: "Activity Sheets",
        content:
          <BbText>
            <BbParagraph>
              To ensure that your child fosters a continued engagement with the theme of the book, we have
                designed and curated a special set of activity sessions which you can download here.
              </BbParagraph>
            <div className="action-container title-box-section">
              <TipLink classes="bb-big-link action-item" external={true} to=""><DownloadIcon />ACTIVITY SHEETS</TipLink>
            </div>
          </BbText>
      },
      {
        content:
          <div className="action-container">
            {actions({ showSample: false, price: this.props.story && this.props.story.price })}
          </div>
      }
    ];
    const mainContent =
      <BbPage documentTitle={this.props.story && this.props.story.title} classes="tip-story" columns={{ small: 12, medium: 10, large: 10 }}>
        <BBPrevNextBar prevLink={{ to: "/stories", label: "All Stories" }} />
        <BbSection className="row align-middle">
          <div className="small-12 large-6 columns image-box">
            <ImageGallery
              items={images}
              useBrowserFullscreen={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              // onImageLoad={(what) => console.log("images loaded", what)}
              lazyLoad={true}
              thumbnailPosition={getDeviceType() === DeviceType.mobile ? "bottom" : "bottom"}
              slideOnThumbnailHover={true}
            />
          </div>
          <div className="small-12 large-6 columns title-box">
            <BbSubSection>
              <BbTitle classes="title">
                {this.props.story && this.props.story.title}
              </BbTitle>
            </BbSubSection>

            <BbSubSection>
              <BbHeadingFour classes="author">
                <div>
                  WRITTEN BY {this.props.story && this.props.story.author.name.toUpperCase()}
                </div>
                <div>
                  ILLUSTRATED BY {this.props.story && this.props.story.illustrator.name.toUpperCase()}
                </div>
              </BbHeadingFour>
            </BbSubSection>

            <BbSubSection>
              <BbText classes="synopsis">
                {this.props.story && this.props.story.synopsis}
              </BbText>
            </BbSubSection>

            <BbSubSection>
              {actions({ showSample: true, price: this.props.story && this.props.story.price })}
            </BbSubSection>
          </div>
        </BbSection>
        <BbDivider />
        {this.deserializeSections(sectionsArray)}
      </BbPage>;

    let toRender;
    switch (this.props.loadStatus) {
      case StoriesLoadStatusEnum.FETCHING: toRender = <Loading />; break;
      case StoriesLoadStatusEnum.COMPLETE: toRender = mainContent; break;
      case StoriesLoadStatusEnum.ERROR: toRender = <NotFoundPage type="story" />; break;
      default: toRender = <Loading />; break;
    }

    return toRender;
  }
}

interface ISection {
  heading?: string;
  content: React.ReactElement<any> | Array<React.ReactElement<any>>;
}

interface IActionProps {
  showSocial?: boolean;
  showSample?: boolean;
  shoppingLink?: string;
  sampleLink?: string;
  price?: number;
}

const actions = (props: IActionProps) => {
  const sampleElement = <TipLink classes="bb-big-link action-item" external={true} to={props.sampleLink}>READ A FREE SAMPLE</TipLink>;
  return (
    <div className="action-container">
      <BbButton
        className="action-item"
        label={`BUY NOW FOR ₹ ${props.price}`}
        subtitle="Secure payments powered by Instamojo"
        onClick={console.log}
      />
      {props.showSample ? sampleElement : null}
    </div>
  );
};
