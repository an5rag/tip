import * as React from "react";
import { classNames } from "classnames";
import { BbCollapse } from "./bb-collapse";

type TreeNodeDataType = string | React.ReactElement<any>;


export interface ITreeNode {
  data: TreeNodeDataType;
  childNodes: (ITreeNode | TreeNodeDataType)[];
  collapsed?: boolean;
}

export interface IBbTreeProps {
  margin?: string;
  data?: ITreeNode | TreeNodeDataType;
  treeNodeClasses?: string | string[];
}


export class BbTree extends React.Component<IBbTreeProps, any> {
  public static defaultProps: IBbTreeProps = {
    margin: "20px",
    data: "No data to display."
  };

  isLeafNode(treeElement: any): boolean {
    return !treeElement.childNodes;
  }

  parseTreeData(root: ITreeNode | TreeNodeDataType) {
    return (root as ITreeNode).data ? (root as ITreeNode).data : root;
  }

  transformTree(root: ITreeNode | TreeNodeDataType) {
    if (this.isLeafNode(root)) {
      return (
        <div>{this.parseTreeData(root)}</div>
      );
    }

    const childrenMap = (root as ITreeNode).childNodes.map((node, index) => {
      return this.transformTree(node);
    });

    const style = {
      marginLeft: this.props.margin
    };

    let childrenCollapsed = false;

    const toggleChildrenCollapsed = () => {
      console.log("Tried to collapse")
      childrenCollapsed = !childrenCollapsed;
    }

    const collapseArrow = (
      <span onClick={toggleChildrenCollapsed}> > </span>
    )

    const childrenNodes = (
      <BbCollapse isOpen={childrenCollapsed}>
        <div style={style}>{childrenMap}</div>
      </BbCollapse>
    )

    return (
      <div>
        <div>{this.parseTreeData(root)} {collapseArrow} </div>
        {childrenNodes}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.transformTree(this.props.data)}
      </div>
    )
  }
}
