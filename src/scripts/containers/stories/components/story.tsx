import * as React from "react";

export interface IStoryProps {
  title: string;
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
    image: "",
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
    const storyBoxClasses = `tip-story-box ${this.state.isExpanded ? "tip-story-box-expanded" : ""}`;
    return (

      <div className={storyBoxClasses} >
        <div className="story-title" style={{color: "white"}}>{this.props.title}</div>
        </div>
    );
  }
}
