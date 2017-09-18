
import * as React from "react";
import Masonry from 'react-masonry-component';
import * as _ from "lodash";

const masonryOptions = {
  // horizontalOrder: true,
  fitWidth: true,
  transitionDuration: "0.3s",
  // stagger: 30
};

export interface ITeamGridProps {
  members: [{/**
    * image source
    * 
    * @type {string}
    * @memberof ITeamGridProps
    */
    src: string;
    /**
     * Team member name
     * 
     * @type {string}
     * @memberof ITeamGridProps
     */
    name?: string;
    /**
     * Team member role
     * 
     * @type {string}
     * @memberof ITeamGridProps
     */
    role?: string;
    /**
     * Link to personal website/blog
     * 
     * @type {string}
     * @memberof ITeamGridProps
     */
    link?: string;
  }]

}

interface ITeamGridState {
  imagesLoaded: boolean;
}

export class TeamGrid extends React.Component<ITeamGridProps, ITeamGridState> {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: false
    }
  }

  handleImagesLoaded = () => {
    this.setState({ imagesLoaded: true });
  }

  render() {
    const childElements = this.props.members.map(function (element, index) {
      const imageFilter = ` sepia(90%) hue-rotate(${_.random(0, 8) * 45}deg)`;

      const captionContent = [
        (<span key={0}>{element.name}</span>), (<br key={1} />), (<span key={2}>{element.role}</span>)
      ];
      let caption;
      if (element.link) {
        caption = (
          <a href={element.link}>
            {captionContent}
          </a>
        );
      } else {
        caption = captionContent;
      }

      return (
        <div className="grid-element" key={index}>
          <img className="grid-element-image hide-on-hover" src={element.src} style={{ filter: imageFilter }} />
          <div className="grid-element-caption show-on-hover">
            {caption}
          </div>
        </div>
      );
    });

    const loadingGif = (<h1>Loading</h1>);

    return (
      <div>
        <Masonry
          className={'tip-masonry-grid'} // default ''
          options={masonryOptions} // default {}
        >
          {childElements}
        </Masonry>
      </div>
    );
  }
};