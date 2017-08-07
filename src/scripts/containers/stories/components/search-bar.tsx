import * as React from "react";

export interface ISearchBarProps {
  title?: string;
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
        <div className="tip-search-bar-item">Search by title: ___________</div>
        <div className="tip-search-bar-item">Latest v</div>        
      </div>

    );
  }
}
