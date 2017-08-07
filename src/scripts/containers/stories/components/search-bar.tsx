import * as React from "react";

export interface ISearchBarProps {
  title?: string;
  history?: {
    label: string;
    url: string;
  }[]
}

interface IState {
}

export class SearchBar extends React.Component<ISearchBarProps, IState> {
  public static defaultProps: ISearchBarProps = {
    title: "Story Title",
  };

  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div className="tip-search-bar" >
        <div className="tip-search-bar-item">All Stories</div>       
      </div>
    );
  }
}
