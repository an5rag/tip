import {
  AtomicBlockUtils,
  CompositeDecorator,
  ContentBlock,
  convertToRaw,
  DefaultDraftBlockRenderMap,
  DraftEntityType,
  DraftHandleValue,
  // Editor,
  EditorState,
  RichUtils
} from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import "draft-js/dist/Draft.css";
import { Map } from "immutable";
import * as React from "react";
import { SyntheticEvent } from "react";
import { CommonUtils, EditorUtils, LinkUtils, MediaUtils } from "./utils";
const isSoftNewlineEvent = require("draft-js/lib/isSoftNewlineEvent");

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

interface IRichTextEditorState {
  editorState: EditorState;
}

interface IRichTextEditorProps {
  readOnly?: boolean;
}

enum MediaType {
  "IMAGE" = "IMAGE"
}

export class RichTextEditor extends React.Component<IRichTextEditorProps, IRichTextEditorState> {

  public static defaultProps: IRichTextEditorProps = {
    readOnly: false
  };

  private static blockRenderMap = Map({
    atomic: {
      element: "figure"
    },
    unstyled: {
      element: "p"
    },
  });

  private editor: Editor;
  private editorContainer: HTMLDivElement;

  constructor(props) {
    super(props);
    // const decorator = new CompositeDecorator([
    //   LinkUtils.linkDecorator
    // ]);
    this.state = {
      editorState: createEditorStateWithText("drtf")
    };

  }

  logState = (e) => {
    e.stopPropagation();
    const content = this.state.editorState.getCurrentContent();
    const selectionState = this.state.editorState.getSelection();
    console.log(selectionState, convertToRaw(content));
  }

  onContainerClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    // only activate if container directly clicked
    if (e.currentTarget === this.editorContainer) {
      // this.editor.focus();
    }
  }

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  }

  handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    } else {
      return "not-handled";
    }
  }

  handleReturn = (e: React.KeyboardEvent<{}>, editorState: EditorState): DraftHandleValue => {

    // if Shift/Alt/Ctrl + Enter, insert soft new line.
    if (isSoftNewlineEvent(e)) {
      this.onChange(RichUtils.insertSoftNewline(editorState));
      return "handled";
    }

    // reset block if return on an empty block
    const currentBlock = CommonUtils.getCurrentBlock(editorState);
    if (currentBlock.getLength() === 0) {
      this.setState({
        editorState: CommonUtils.changeBlockType(editorState)
      });
      return "handled";
    }

    return "not-handled";

  }
  /**
   * Provide nesting of upto 1 level in ULs or OLs.
   *
   * @memberof RichTextEditor
   */
  onTab = (e) => {
    const { editorState } = this.state;
    const newEditorState = RichUtils.onTab(e, editorState, 1);
    if (newEditorState !== editorState) {
      this.onChange(newEditorState);
    }
  }

  addLink = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // set new editor state and bring it back to focus
    this.setState({
      editorState: LinkUtils.addLinkAtSelection(this.state.editorState, { url: "google.com" })
    }, () => {
      setTimeout(() => this.editor.focus(), 0);
    });
  }

  removeLink = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    this.setState({
      editorState: LinkUtils.removeLinkAtSelection(this.state.editorState)
    }, () => {
      setTimeout(() => this.editor.focus(), 0);
    });
  }

  render() {
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(RichTextEditor.blockRenderMap);
    const classNames = (this.props.readOnly ? "editor readonly" : "editor") + " tip-blog-text";
    return (
      <div className={classNames} onClick={this.onContainerClick} ref={(container) => { this.editorContainer = container; }}>
        <Editor
          readOnly={this.props.readOnly}
          ref={(editor) => this.editor = editor}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[inlineToolbarPlugin]}
          handleKeyCommand={this.handleKeyCommand}
          handleReturn={this.handleReturn}
          onTab={this.onTab}
          blockRenderMap={extendedBlockRenderMap}
          blockRendererFn={MediaUtils.mediaBlockRenderFn}
          handleBeforeInput={(inputString) => EditorUtils.beforeInput(this.state.editorState, inputString, this.onChange)}
          placeholder={this.props.readOnly ? "" : "Write something..."}
          decorators={[LinkUtils.linkDecorator]}
        />
        <InlineToolbar />
        <button onClick={this.addLink}>Add link</button>
        <button onClick={this.removeLink}>Remove link</button>
        <input
          onClick={this.logState}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}

export default RichTextEditor;
