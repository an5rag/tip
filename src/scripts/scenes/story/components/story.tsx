import * as React from "react";
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
    id?: string;
  };
  illustrator?: {
    name: string;
    id?: string;
  };
  details?: string;
  note?: {
    author: string;
    illustrator: string;
  };
  shoppingLink?: string;
}

interface IState {};

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

    };
  }

  render() {
    return (
      <div className="tip-story" >
        <div className="row row-center">
          <div className="small-12 medium-10 columns">
            <h1 className="title">{this.props.title}</h1>
            <div className="row row-center row-wrap-reverse">
              <div className="small-12 medium-6 columns synopsis">
                <p>
                  {this.props.synopsis}
                </p>
              </div>
              <div className="small-12 medium-6 columns info">
                <div>
                  <span className="info-key">Author </span>
                  <span className="info-value">{this.props.author.name}</span>
                </div>
                <div>
                  <span className="info-key">Illustrator </span>
                  <span className="info-value">{this.props.illustrator.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}