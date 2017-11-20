
import * as React from "react";

interface IFrictionBoxState {
  velocity: number,
  previousScrollTop: number,
  displacement: number
}

interface IFrictionBoxProps {

}

class FrictionBox extends React.Component<any, IFrictionBoxState>  {
  public animationFrameHandler: number;
  private boundHandlers;

  constructor(props) {
    super(props);
    this.state = { velocity: 0, displacement: 0, previousScrollTop: 0 };
    this.boundHandlers = {
      boundFrictionMove: this.frictionMove.bind(this),
      boundScrollHandler: this.handleScrollEvent.bind(this)
    };
  }

  handleScrollEvent(event: Event) {
    // initial velocity
    const scrollDistance = window.scrollY - this.state.previousScrollTop;
    const newVelocity = this.state.velocity + scrollDistance;
    this.setState({
      velocity: newVelocity,
      previousScrollTop: window.scrollY
    });
    if (!this.animationFrameHandler) {
      console.log("Starting interval");
      this.animationFrameHandler = setInterval(this.boundHandlers.boundFrictionMove, 1000/60);
    }
  }

  frictionMove() {
    const newVelocity = this.state.velocity - this.state.velocity * 0.08;
    const newDisplacement = this.state.displacement + newVelocity;
    this.setState({
      velocity: newVelocity,
      displacement: newDisplacement
    });
    if (Number(this.state.velocity.toFixed(2)) === 0) {
      console.log("Clearing interval");
      clearInterval(this.animationFrameHandler);
      this.animationFrameHandler = undefined;
    }
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.boundHandlers.boundScrollHandler);
  }

  public componentWillUnmount() {
    clearInterval(this.animationFrameHandler);
    window.removeEventListener("scroll", this.boundHandlers.boundScrollHandler);
  }

  render() {
    const styles = {
      transform: `translate3d(0px, ${(this.state.displacement/10).toFixed(2)}px, 0px) rotate(${(this.state.displacement/100)}deg)`
    }
    return (
      <div className="friction-box" style={styles}></div>
    )
  }
}

export class FrictionBoxes extends React.Component<any, any> {

  render() {

    return (
      <div className="row friction-boxes-container">
        <FrictionBox />
      </div>
    );
  }
};

