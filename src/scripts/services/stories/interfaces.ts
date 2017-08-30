export interface IStory {
  visible?: boolean;
  title?: string;
  id?: string;
  images?: {
    thumbnail?: string;
    cover?: string;
    series?: Array<string>;
  };
  synopsis?: string;
  author?: {
    name: string;
    id?: string;
  };
  illustrator?: {
    name: string;
    id?: string;
  };
  note?: {
    author: string;
    details?: string;
    illustrator: string;
  };
  shoppingLink?: string;
}

export enum IStoriesLoadStatus {
  INITIAL,
  FETCHING,
  UPDATING,
  COMPLETE
}

export interface IStoriesState {
  readonly loadStatus: IStoriesLoadStatus;
  readonly currentStory?: {
    id: string;
  };
  readonly stories: Array<IStory>;
}