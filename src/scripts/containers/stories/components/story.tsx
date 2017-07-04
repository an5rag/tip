import * as React from "react";

interface IProps {
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

export class Story extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
    title: "Story Title",
    id: "",
    image: "",
    synopsis:"Story synopsis",
    author: {
      name: "Author Name",
      id: ""
    },
    illustrator: {
      name: "Illustrator Name",
      id: ""
    }
  };

  constructor(props: IProps) {
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
    const storyBoxClasses = `tip-story-box ${this.state.isExpanded? "tip-story-box-expanded" : ""}`;
    return (
      <div  className={storyBoxClasses}/>
    );
  }
}
