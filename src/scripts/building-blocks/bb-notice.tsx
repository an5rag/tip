import * as React from "react";
import { BbCollapse } from "./bb-collapse"

interface BbNoticeProps {
  type?: "primary" | "secondary" | "danger";
  title?: string;
  content?: string;
}

interface BbNoticeState {
  open: boolean
}


export class BbNotice extends React.Component<BbNoticeProps, BbNoticeState> {
  public static defaultProps: BbNoticeProps = {
    type: "primary"
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  handleCloseClicked() {
    this.setState({ open: false });
  }


  render() {
    const classes = `bb-notice ${this.props.type}`;

    return (
      <BbCollapse isOpen={this.state.open}>
        <div className={classes}>
          <i className="fa fa-minus-square-o close-button" onClick={() => this.handleCloseClicked()}></i>
          <h1 className="title">{this.props.title}</h1>
          <p className="content">{this.props.content}</p>
        </div>
      </BbCollapse>
    )
  }
}
