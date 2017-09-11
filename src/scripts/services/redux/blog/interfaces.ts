export interface IBlogPost {
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
  tags?: Array<string>;
}

export enum BlogLoadStatusEnum {
  INITIAL,
  FETCHING,
  UPDATING,
  COMPLETE
}

export interface IBlogState {
  readonly loadStatus: BlogLoadStatusEnum;
  readonly currentStory?: {
    id: string;
  };
  readonly stories: Array<IBlogPost>;
}