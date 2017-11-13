import * as React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export interface IImage {
  src: string
}

export interface BbImageGridProps {
  images: IImage[]
}

interface BBImageGridState {

}


const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);


export class BbImageGrid extends React.Component<BbImageGridProps, BBImageGridState> {

  constructor(props) {
    super(props);
  }

  getGridElements() {
    return this.props.images.map((image, index) => {
      return (
        <Fade key={index}>
          <div className="grid-element">
            <img src={image.src} />
          </div>
        </Fade>
      )
    })
  }


  render() {
    const classes = `bb-image-grid`;

    return (
      <TransitionGroup>
        <div className={classes}>
          {this.getGridElements()}
        </div>
      </TransitionGroup>
    )
  }
}
