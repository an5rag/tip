import * as React from "react";
import { IStory, StoriesLoadStatusEnum } from './../../../../../services/redux/stories/interfaces';
import { match } from 'react-router-dom';
export interface IStoryProps {
  story: IStory;
  loadStatus?: StoriesLoadStatusEnum;
  match?: match<{ storyId: string }>;
  storyId?: string;
  loadStory?: (storyId: string) => void;
  setCurrentStory?: ({ id: string }) => void;
}
export class Story extends React.Component<IStoryProps, any> {
  public static defaultProps: IStoryProps = {
    story: {
      title: "Story Title",
      id: "",
      images: {
        cover: "http://rishikajain.com/wp-content/uploads/2016/10/Lessons-from-this-picture.jpg",
        series: []
      },
      synopsis: "Story synopsis",
      author: {
        name: "Author Name",
        id: ""
      },
      illustrator: {
        name: "Illustrator Name",
        id: ""
      }
    }
  };
  
  componentWillMount() {
    this.loadStory(this.props.storyId);
  }

  loadStory(storyId: string) {
    this.props.loadStory(storyId);
    this.props.setCurrentStory({ id: storyId });
  }

  componentWillReceiveProps(nextProps: IStoryProps) {
    if (nextProps.match && (nextProps.storyId != this.props.storyId)) {
      this.loadStory(nextProps.match.params.storyId);
    }
  }

  render() {
    if (this.props.story === null) {
      return (<div>story not found!</div>);
    }

    return (
      <div className="tip-story" >
        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <h1 className="title">{this.props.story.title}</h1>
            <div className="row row-center row-wrap-reverse">
              <div className="small-12 medium-6 columns synopsis">
                <p>
                  {this.props.story.synopsis}
                </p>
              </div>
              <div className="small-12 medium-6 columns info">
                <div>
                  <span className="info-key">Author </span>
                  <span className="info-value">{this.props.story.author? this.props.story.author.name: "Unknown"}</span>
                </div>
                <div>
                  <span className="info-key">Illustrator </span>
                  <span className="info-value">{this.props.story.illustrator? this.props.story.illustrator.name: "Unknown"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}