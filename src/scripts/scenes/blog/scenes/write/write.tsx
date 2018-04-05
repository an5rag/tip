
import * as React from "react";
import { RichTextEditor } from "./components/rich-text-editor/rich-editor";
import { TextInput } from "./components/text-input";

export class BlogWrite extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      focus: true,
      preview: false
    };
  }

  onContainerClick = () => {
    // this.editor.focus();
  }

  onButtonClick = (e) => {
    this.setState({
      preview: !this.state.preview
    });
  }

  onTitleTextChange = () => {

  }

  render() {

    return (
      <div className="row align-center">
        <div className="small-12 medium-8 columns tip-blog-write">
          <TextInput placeholder="Title" focus={this.state.focus} />
          <button onClick={this.onButtonClick} >Preview </button>
          <RichTextEditor readOnly={this.state.preview} />
        </div>
      </div>
    );
  }
}
export default BlogWrite;
