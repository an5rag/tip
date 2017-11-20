import * as React from "react";

export enum BbDropdownPositions {
  "TOP_LEFT" = "top-left",
  "TOP_RIGHT" = "top-right",
  "TOP_CENTER" = "top-center",
  "LEFT_CENTER" = "left-center",
  "RIGHT_CENTER" = "right-center",
  "BOTTOM_LEFT" = "bottom-left",
  "BOTTOM_CENTER" = "bottom-center",
  "BOTTOM_RIGHT" = "bottom-right",
}

export interface IBbDropdownProps {
  childElement?: React.ReactElement<any> | React.ReactHTMLElement<any>;
  parentElement?: React.ReactElement<any> | React.ReactHTMLElement<any>;
  position?: BbDropdownPositions;
  openOnMouseEnter?: boolean;
  closeOnMouseLeave?: boolean;
  toggleOnParentClick?: boolean;
  closeOnChildClick?: boolean;
  containerClasses?: string;
  parentClasses?: string;
  childClasses?: string;
  visibleClasses?: string;

}

export interface IBbDropDownState {
  open: boolean;
}

export class BbDropDown extends React.Component<IBbDropdownProps, IBbDropDownState> {
  public static defaultProps: IBbDropdownProps = {
    position: BbDropdownPositions.BOTTOM_LEFT,
    openOnMouseEnter: true,
    closeOnMouseLeave: true,
    toggleOnParentClick: true,
    closeOnChildClick: true,
  };
  public wrapperRef;
  /**
   * To prevent parent-click closing a just opened dropdown,
   * wait for some time before allowing parent click to close it
   *
   * @private
   * @memberof BbDropDown
   */
  private dropDownWasJustOpened;

  private blockDropdownFromClosingByParentClick() {
    this.dropDownWasJustOpened = setTimeout(() => {
      this.dropDownWasJustOpened = undefined;
    }, 500);
  }

  constructor(props: IBbDropdownProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  public handleWindowClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.handleClickOutside();
    }
  }

  public handleClickOutside() {
    this.setState({ open: false });
  }

  public handleParentClick() {
    if (this.props.toggleOnParentClick) {
      if (this.state.open) {
        // only close if it's been enough time since it's been open
        if (!this.dropDownWasJustOpened) {
          this.setState({ open: false });
        }
      } else {
        // always open if previously closed
        this.setState({ open: true });
      }
    }

  }

  public handleChildClick() {
    if (this.props.closeOnChildClick) {
      this.setState({ open: false });
    }
  }

  public handleMouseEnter() {
    if (this.props.openOnMouseEnter) {
      this.setState({ open: true });
      this.blockDropdownFromClosingByParentClick();
    }
  }

  public handleMouseLeave() {
    if (this.props.closeOnMouseLeave) {
      this.setState({ open: false });
    }
  }

  public componentDidMount() {
    document.addEventListener("mousedown", this.handleWindowClick);
  }

  public componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleWindowClick);
  }

  public render() {
    const classes = `bb-dropdown animate fade
      ${this.state.open ? `visible ${this.props.visibleClasses}` : "not-visible"}
      ${this.props.containerClasses}`;
    return (
      <div
        ref={(node) => { this.wrapperRef = node; }}
        className={classes}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <div className={`parent ${this.props.parentClasses}`}
          onClick={this.handleParentClick.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this)}>
          {this.props.parentElement}
        </div>
        <div className={`child ${this.props.position} ${this.props.childClasses}`} 
        onClick={this.handleChildClick.bind(this)}>
          {this.props.childElement}
        </div>
      </div>
    );
  }
}
