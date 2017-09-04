import * as React from "react";

export interface IStoryBoxProps {
  title?: string;
  id?: string;
  image?: any;
  synopsis?: string;
  author?: {
    name: string;
    id?: string;
  }
  illustrator?: {
    name: string;
    id: string;
  }
  tags?: Array<string>;
}


export class StoryBox extends React.Component<IStoryBoxProps, any> {
  public static defaultProps: IStoryBoxProps = {
    title: "Story Title",
    id: "",
    image: "https://img03.deviantart.net/7874/i/2008/122/4/5/crack_texture_by_struckdumb.jpg",
    synopsis: "Story synopsis",
    author: {
      name: "Author Name",
      id: ""
    },
    illustrator: {
      name: "Illustrator Name",
      id: ""
    },
    tags: ["NONE"]
  };

  render() {
    const storyBoxClasses = `tip-story-box`;
    const visibleTags = this.props.tags.slice(0, 3);
    const storyTags = visibleTags.reduce((accumulator, tag) => { 
      return accumulator ? accumulator + " | " + tag.toUpperCase() : tag.toUpperCase() 
    }, "");
    return (
      <div className={storyBoxClasses} >
        <img src={this.props.image} />
        <div className="tip-story-box-caption">
          <div className="story-title">
            {this.props.title}
          </div>
          <div className="story-subtitle">
            {this.props.author.name}
          </div>
          <div className="story-tags">
            {storyTags}
          </div>
        </div>
      </div>

    );
  }
}
