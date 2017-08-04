import * as React from "react";

export interface IStoryProps {
  title?: string;
  id?: string;
  image?: any;
  synopsis?: string;
  author?: {
    name: string;
    id: string;
  }
  illustrator?: {
    name: string;
    id: string;
  }
}

interface IState {
  isExpanded: boolean;
}

export class Story extends React.Component<IStoryProps, IState> {
  public static defaultProps: IStoryProps = {
    title: "Story Title",
    id: "",
    image: "http://rishikajain.com/wp-content/uploads/2016/10/Lessons-from-this-picture.jpg",
    synopsis: "Story synopsis",
    author: {
      name: "Author Name",
      id: ""
    },
    illustrator: {
      name: "Illustrator Name",
      id: ""
    }
  };

  constructor(props: IStoryProps) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleMouseClick() {
    this.setState({
      isExpanded: true
    })
  }

  render() {
    const storyBoxClasses = `tip-story-box`;
    return (
      <div className={storyBoxClasses} >
        <img src={this.props.image}/>
        <div className="tip-story-box-caption">
          <div className="story-title">
            {this.props.title}
          </div>
          <div className="story-subtitle">
            {this.props.author.name}
          </div>
                    <div className="story-tags">
            FEMINISM | SEXISM | IDEALISM
          </div>
        </div>
      </div>

    );
  }
}
