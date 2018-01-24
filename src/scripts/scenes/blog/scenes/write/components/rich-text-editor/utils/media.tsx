import { CompositeDecorator, ContentBlock, ContentState, EditorState, RichUtils } from "draft-js";
import * as React from "react";
import { TipLink } from "../../../../../../../building-blocks/tip-link";

export enum MediaType {
  "IMAGE" = "IMAGE"
}

const Media = (props) => {
  if (!props.block.getEntityAt(0)) {
    return (<div></div>);
  }
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const { src, caption } = entity.getData();
  const type: MediaType = entity.getType();
  let media;
  switch (type) {
    case "IMAGE":
      media = (
        <div>
          <img src={src} />
          <figcaption>{caption}</figcaption>
        </div>
      );
      break;
    default: media = (<div></div>); break;
  }
  return media;
};

export interface IMediaData {
  url: string;
  type?: MediaType;
  caption?: string;
}

export class MediaUtils {

  public static mediaBlockRenderFn = (block: ContentBlock) => {
    if (block.getType() === "atomic") {
      return {
        component: Media,
        editable: true,
      };
    }
    return null;
  }

  public static addMedia(editorState: EditorState, data: IMediaData) {
    // const { editorState, urlValue, urlType } = this.state;
    // const contentState = editorState.getCurrentContent();
    // const contentStateWithEntity = contentState.createEntity(
    //   urlType,
    //   "IMMUTABLE",
    //   { src: urlValue }
    // );
    // const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    // const newEditorState = EditorState.set(
    //   editorState,
    //   { currentContent: contentStateWithEntity }
    // );
    // this.setState({
    //   editorState: AtomicBlockUtils.insertAtomicBlock(
    //     newEditorState,
    //     entityKey,
    //     " "
    //   ),
    //   showURLInput: false,
    //   urlValue: "",
    // }, () => {
    //   setTimeout(() => this.focus(), 0);
    // });
  }
}
