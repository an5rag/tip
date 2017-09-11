import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { match } from 'react-router-dom';
import { actionCreators } from './../../../../services/redux/stories/actions';
import { IStory, StoriesLoadStatusEnum } from './../../../../services/redux/stories/interfaces';


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

const mapStateToProps: MapStateToProps<any, any> = (state, ownProps) => {
  return {
    match: ownProps.match
  }
}

const mapDispatchToProps: MapDispatchToProps<any, any> = dispatch => {
  return {
  }
}

export const ArchiveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Archive);

