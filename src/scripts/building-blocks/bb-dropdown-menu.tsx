import * as React from 'react';

export enum BbDropdownPositions {
  "TOP_LEFT" = "top-left",
  "TOP_RIGHT" = "top-right",
  "TOP_CENTER" = "top-center",
  "LEFT_CENTER" = "left-center",
  "RIGHT_CENTER" = "right-center",
  "BOTTOM_LEFT" = "bottom-left",
  "BOTTOM_CENTER" = "bottom-center",
  "BOTTOM_RIGHT" = "bottom-right"
}

export interface IBbDropdownProps {
  childElement?: React.ReactElement<any> | React.ReactHTMLElement<any>;
  parentElement?: React.ReactElement<any> | React.ReactHTMLElement<any>;
  position?: BbDropdownPositions;
  openOnMouseEnter?: boolean;
  closeOnMouseLeave?: boolean;
  openOnParentClick?: boolean;
  closeOnChildClick?:boolean;
  containerClasses?:string;
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
    openOnParentClick: true,
    closeOnChildClick: true,
  };

  public boundClickHandler;
  public wrapperRef;

  constructor(props: IBbDropdownProps) {
    super(props);
    this.state = {
      open: false
    }
    this.boundClickHandler = this.handleWindowClick.bind(this);
  }

  handleWindowClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.handleClickOutside();
    }
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  handleParentClick() {
    if (this.props.openOnParentClick) {
      this.setState({ open: true });
    }
  }

  handleChildClick() {
    if (this.props.closeOnChildClick) {
      this.setState({ open: false });
    }
  }

  handleMouseEnter() {
    if (this.props.openOnMouseEnter) {
      this.setState({ open: true });
    }
  }

  handleMouseLeave() {
    if (this.props.closeOnMouseLeave) {
      this.setState({ open: false });
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.boundClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.boundClickHandler);
  }


  render() {
    return (
      <div
        ref={(node) => { this.wrapperRef = node; }}
        className={`bb-dropdown animate fade ${this.state.open ? `visible ${this.props.visibleClasses}` : "not-visible"} ${this.props.containerClasses}`}
        
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <div className={`parent ${this.props.parentClasses}`} onClick={this.handleParentClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)}>
          {this.props.parentElement}
        </div>
        <div className={`child ${this.props.position} ${this.props.childClasses}`} onClick={this.handleChildClick.bind(this)}>
          {this.props.childElement}
        </div>
      </div>
    )
  }
}