import * as React from "react";

interface IProps {
  isOpen: boolean;
  transitionDuration?: number;
}


export class BbCollapse extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    isOpen: false,
    transitionDuration: 200
  };

  private element = null;

  constructor(props: IProps) {
    super(props);
  }


  getHeight() {
    return this.element && this.element.scrollHeight;
  }

  render() {
    const classes = `bb-collapse ${this.props.isOpen ? "is-open" : "is-closed"}`;
    const style = {
      height: this.props.isOpen ? this.getHeight() : 0,
      transition: `height ${this.props.transitionDuration}ms`
    }
    return (
      <div 
      ref={(element) => {this.element = element;}} 
      className={classes}
      style={style}
      >
        {this.props.children}
      </div>
    )
  }
}
