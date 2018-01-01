import * as React from "react";
import { BbCollapse } from "./bb-collapse";

interface IBbNoticeProps {
  type?: "light" | "dark" | "danger";
  title?: string;
  content?: string | React.ReactElement<any>;
  dismissable?: boolean;
}

interface IBbNoticeState {
  open: boolean;
}

export class BbNotice extends React.Component<IBbNoticeProps, IBbNoticeState> {
  public static defaultProps: IBbNoticeProps = {
    type: "light",
    dismissable: false
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    // this.handleCloseClicked = this.handleCloseClicked.bind(this);
  }

  handleCloseClicked() {
    this.setState({ open: false });
  }

  render() {
    const classes = `bb-notice ${this.props.type}`;
    const dismissButton = (<i className="fa fa-times-circle close-button" onClick={this.handleCloseClicked.bind(this)}></i>);
    return (
      <BbCollapse isOpen={this.state.open}>
        <div className={classes}>
          {this.props.dismissable ? dismissButton : null}
          <h3 className="title">{this.props.title}</h3>
          <div className="content">{this.props.content}</div>
        </div>
      </BbCollapse>
    );
  }
}
