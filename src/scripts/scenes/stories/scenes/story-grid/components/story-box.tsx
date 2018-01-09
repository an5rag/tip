import * as React from "react";
import { Link } from "react-router-dom";

export interface IStoryBoxProps {
  title?: string;
  id?: string;
  image?: any;
  synopsis?: string;
  author?: {
    name: string;
    id?: string;
  };
  illustrator?: {
    name: string;
    id?: string;
  };
  tags?: string[];
  linkTo?: string;
}

export class StoryBox extends React.Component<IStoryBoxProps, any> {
  public static defaultProps: IStoryBoxProps = {
    tags: []
  };

  render() {
    const visibleTags = this.props.tags.slice(0, 3);
    const storyTags = visibleTags.reduce((accumulator, tag) => {
      return accumulator ? accumulator + " | " + tag.toUpperCase() : tag.toUpperCase();
    }, "");
    return (
      <div className={`tip-story-box-container small-10 medium-5 large-4 columns`}>
        <Link to={this.props.linkTo}>
          <div className="tip-story-box">
            <div className="cover">
              <img src={this.props.image} />
            </div>
            <div className="caption">
              <div className="title">
                {this.props.title}
              </div>
              <div>
                {this.props.author.name}
              </div>
              <div>
                {this.props.illustrator.name}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
