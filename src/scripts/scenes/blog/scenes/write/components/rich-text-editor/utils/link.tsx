import { CompositeDecorator, ContentBlock, ContentState, EditorState, RichUtils } from "draft-js";
import * as React from "react";
import { TipLink } from "../../../../../../../building-blocks/tip-link";

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <TipLink external={true} to={url}>{props.children}</TipLink>
  );
};

export interface ILinkData {
  url: string;
  type?: "internal" | "external";
}

export class LinkUtils {
  public static linkDecorator = {
    strategy: LinkUtils.findLinkEntities,
    component: Link,
  };

  public static findLinkEntities(contentBlock: ContentBlock, callback, contentState: ContentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === "LINK"
        );
      },
      callback);
  }

  public static addLinkAtSelection(editorState: EditorState, data: ILinkData) {
    const contentState = editorState.getCurrentContent();

    // create a new link entity
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: data.url }
    );

    // get the key for the entity we just created
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    // add entity to editor state
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

    // apply the entity to the selection
    return RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    );
  }

  public static removeLinkAtSelection(editorState: EditorState) {
    return RichUtils.toggleLink(
      editorState,
      editorState.getSelection(),
      null
    );
  }
}
