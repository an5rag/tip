import * as React from "react";

export const StoryContainer = (props: { match: { params: { storyId: string } } }) => {
  return (
    <Story id={props.match.params.storyId} />
  )
}

export interface IStoryProps {
  title?: string;
  id?: string;
  images?: {
    cover: string;
    series: Array<string>;
  };
  synopsis?: string;
  author?: {
    name: string;
    id: string;
  };
  illustrator?: {
    name: string;
    id: string;
  };
  note?: {
    author: string;
    illustrator: string;
  };
  shoppingLink?: string;
}

interface IState {
  isExpanded: boolean;
}

export class Story extends React.Component<IStoryProps, IState> {
  public static defaultProps: IStoryProps = {
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
    return (
      <div className="tip-story" >
        <div>
          STORY!
          <h3>{this.props.id}</h3>
        </div>
      </div>
    );
  }
}
