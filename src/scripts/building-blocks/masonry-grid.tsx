
import * as React from "react";
import Masonry from 'react-masonry-component';

const masonryOptions = {
  // horizontalOrder: true,
  fitWidth: true
};


export class MasonryGrid extends React.Component<any, any> {
  render() {
    var childElements = this.props.elements.map(function (element, index) {
      const imageFilter = `grayscale(100%) sepia(100%) hue-rotate(${Math.ceil(Math.random() * 360)}deg) saturate(150%)`;
      return (
        <div className="grid-element" key={index}>
          <img className="grid-element-image hide-on-hover" src={element.src} style={{ filter: imageFilter }} />
          <div className="grid-element-caption show-on-hover">Anurag Choudhary</div>
        </div>
      );
    });

    return (
      <Masonry
        className={'tip-masonry-grid'} // default ''
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {childElements}
      </Masonry>
    );
  }
};