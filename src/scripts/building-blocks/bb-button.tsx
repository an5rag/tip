import * as React from "react";

interface IButtonProps {
  disabled?: boolean;
  label: string;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  theme?: "dark" | "light";
  subtitle?: string;
  className?: string;
}
interface IButtonState {
  mouseDown: boolean;
}
export class BbButton extends React.Component<IButtonProps, IButtonState> {
  public static defaultProps: Partial<IButtonProps> = {
    disabled: false,
    theme: "light"
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
    return (
      <span className={`bb-button-container ${this.props.className || ""}`}>
        <button
          className={`bb-button ${this.props.theme} ${this.state.mouseDown ? "active" : ""}`}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onTouchStart={this.onMouseDown}
          onTouchEnd={this.onMouseUp}
        >
          {this.props.label}
        </button>
        <span className="subtitle">{this.props.subtitle}</span>
      </span>
    );
  }
}
