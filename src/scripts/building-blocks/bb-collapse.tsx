import * as React from "react";

interface IProps {
  isOpen: boolean;
  transitionDuration?: number;
  classes?: string;
}

export class BbCollapse extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    isOpen: false,
    transitionDuration: 400
  };

  private element = undefined;

  constructor(props: IProps) {
    super(props);
  }

  getHeight() {
    return this.element && this.element.scrollHeight;
  }

  render() {
    const classes = `bb-collapse ${this.props.classes || ""} ${this.props.isOpen ? "is-open" : "is-closed"}`;
    const style: React.CSSProperties = {
      maxHeight: this.props.isOpen ? this.getHeight() : 0,
      transition: `max-height ${this.props.transitionDuration}ms cubic-bezier(0.785, 0.135, 0.15, 0.86)`
    };
    return (
      <div
        ref={(element) => { this.element = element; }}
        className={classes}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}
