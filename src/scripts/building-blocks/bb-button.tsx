import * as React from "react";
import { ReactElement } from "react";
import { TipLink } from "./tip-link";

interface IButtonProps {
  disabled?: boolean;
  label: string | ReactElement<any>;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  theme?: "dark" | "light";
  subtitle?: string;
  className?: string;
  linkTo?: string;
  linkExternal?: boolean;
}
interface IButtonState {
  mouseDown: boolean;
}
export class BbButton extends React.Component<IButtonProps, IButtonState> {
  public static defaultProps: Partial<IButtonProps> = {
    disabled: false,
    theme: "dark"
  };

  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false
    };
  }

  onMouseUp = () => {
    this.setState({
      mouseDown: false
    });
  }

  onMouseDown = () => {
    this.setState({
      mouseDown: true
    });
  }

  componentDidMount() {
    window.addEventListener("mouseup", this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp);
  }

  render() {
    let container;
    const containerClasses = `bb-button-container ${this.props.className || ""}`;
    const button = <button
      className={`bb-button ${this.props.theme} ${this.state.mouseDown ? "active" : ""}`}
      disabled={this.props.disabled}
      onClick={this.props.onClick}
      onMouseDown={this.onMouseDown}
      onMouseUp={this.onMouseUp}
      onTouchStart={this.onMouseDown}
      onTouchEnd={this.onMouseUp}
    >
      {this.props.label}
    </button>;
    const subtitle = <span className="subtitle">{this.props.subtitle}</span>;

    if (this.props.linkTo) {
      container =
        <TipLink
          to={this.props.linkTo}
          external={this.props.linkExternal}
          classes={containerClasses}>
          {button}{subtitle}
        </TipLink>;
    } else {
      container = <span className={containerClasses}>{button}{subtitle}</span>;
    }
    return container;
  }
}
