import {Editor, EditorState, getDefaultKeyBinding, KeyBindingUtil} from "draft-js";
import * as React from "react";

class MyEditor extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
  }
  onChange(editorState: any) {
    this.setState({ editorState });
  }
  render() {
    return (
      <div>
        <div>
        </div>
        <div className="editor">

          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export class BlogHome extends React.Component<any, any> {
  render() {
    return (
      <div className="row row-center">
        <div className="small-12 medium-12 columns tip-blog-write tip-blog-post">
        </div>
      </div>
    );
  }
}
