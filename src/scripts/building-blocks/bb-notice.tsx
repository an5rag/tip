import * as React from "react";
import { BbCollapse } from "./bb-collapse";

interface BbNoticeProps {
  type?: "primary" | "secondary" | "danger";
  title?: string;
  content?: string;
  dismissable?: boolean;
}

interface BbNoticeState {
  open: boolean;
}

export class BbNotice extends React.Component<BbNoticeProps, BbNoticeState> {
  public static defaultProps: BbNoticeProps = {
    type: "primary",
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
          <h1 className="title">{this.props.title}</h1>
          <p className="content">{this.props.content}</p>
        </div>
      </BbCollapse>
    );
  }
}
