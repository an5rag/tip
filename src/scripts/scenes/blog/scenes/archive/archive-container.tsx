import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import { match } from "react-router-dom";
import { actionCreators } from "./../../../../services/redux/stories/actions";
import { IStory, StoriesLoadStatusEnum } from "./../../../../services/redux/stories/interfaces";

interface IArchiveProps {

}
export class Archive extends React.Component<IArchiveProps, any> {
  componentWillMount() {
  }

  render() {

    return (
      <div className="tip-blog-archive">
        Archive!
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state, ownProps) => {
  return {
    match: ownProps.match
  };
};

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch) => {
  return {
  };
};

export const ArchiveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Archive);
