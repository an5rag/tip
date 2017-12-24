import { ContentBlock, DraftBlockType, DraftHandleValue, EditorState, Modifier, SelectionState } from "draft-js";

export class CommonUtils {
  /**
   * Get currentBlock in the editorState.
   *
   * @static
   * @memberof EditorUtils
   */
  public static getCurrentBlock = (editorState: EditorState) => {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    // getStartKey gets the key of the block containing the start position of the selection range
    const block = contentState.getBlockForKey(selectionState.getStartKey());
    return block;
  }

  public static changeBlockType = (editorState: EditorState, newType: DraftBlockType = "unstyled") => {
    const newContentState = Modifier.setBlockType(editorState.getCurrentContent(), editorState.getSelection(), newType);
    return EditorState.push(editorState, newContentState, "change-block-type");
  }

  public static changeBlockText = (editorState: EditorState, contentBlock: ContentBlock, newText: string) => {
    const blockKey = contentBlock.getKey();
    // make a selection
    const selectionState = SelectionState.createEmpty(blockKey);
    const updatedSelection: any = selectionState.merge({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: contentBlock.getLength(),
      hasFocus: true
    });
    const newContentState = Modifier.replaceText(editorState.getCurrentContent(), updatedSelection, newText);
    return EditorState.push(editorState, newContentState, "change-block-type");
  }
}

const HANDLED: DraftHandleValue = "handled";
const NOT_HANDLED: DraftHandleValue = "not-handled";

const keyboardShortcuts: { [shortcut: string]: DraftBlockType } = {
  "* ": "unordered-list-item",
  "- ": "unordered-list-item",
  "1. ": "ordered-list-item"
};

export class EditorUtils {
  public static beforeInput = (editorState, inputString, onChange): DraftHandleValue => {
    const selection = editorState.getSelection();
    const currentBlock = CommonUtils.getCurrentBlock(editorState);
    const blockType = currentBlock.getType();
    if (blockType === "atomic") {
      return NOT_HANDLED;
    }

    const input = currentBlock.getText() + inputString;
    const fType = keyboardShortcuts[input];

    if (fType) {
      const editorStateWithNewBlock = CommonUtils.changeBlockType(editorState, fType);
      onChange(CommonUtils.changeBlockText(editorStateWithNewBlock, currentBlock, ""));
      return HANDLED;
    }

    return NOT_HANDLED;

  }
}
