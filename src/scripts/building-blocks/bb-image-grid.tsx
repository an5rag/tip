import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"

export interface IImage {
  src: string;
}

export interface IBbImageGridProps {
  images: IImage[];
}

interface IBBImageGridState {

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

export class BbImageGrid extends React.Component<IBbImageGridProps, IBBImageGridState> {

  constructor(props) {
    super(props);
  }

  public getGridElements() {
    return this.props.images.map((image, index) => {
      return (
        <Fade key={index}>
          <div className="grid-element">
            <img src={image.src} />
          </div>
        </Fade>
      );
    });
  }

  public render() {
    const classes = `bb-image-grid`;

    return (
      <div className={classes}>
        <TransitionGroup>

          {this.getGridElements()}

        </TransitionGroup>
      </div>
    );
  }
}
