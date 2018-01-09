export interface IStory {
  visible?: boolean;
  title?: string;
  id?: string;
  images?: {
    thumbnail?: string;
    cover?: string;
    series?: Array<{
      url: string,
      caption: string
    }>;
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
  about?: {
    author?: string[];
    details?: string[];
    illustrator?: string[];
  };
  shoppingLink?: string;
  price?: number;
  tags?: string[];
  index: number;
}

export enum StoriesLoadStatusEnum {
  INITIAL,
  FETCHING,
  COMPLETE,
  ERROR
}

export enum FetchError {
  SERVER_ERROR = "Server Error",
  NOT_FOUND_ERROR = "Not Found Error"
}

export interface IStoriesState {
  loadStatus: StoriesLoadStatusEnum;
  currentStory?: IStory;
  prevStory?: IStory;
  nextStory?: IStory;
  stories: { [storyId: string]: IStory };
  fetchError?: FetchError;
}
