import * as _ from "lodash";
import { IStory } from "./interfaces";

const mockStories: IStory[] = [];
export const delayPromise = (delay: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

export const getAllStories = (delay?: number) => delayPromise(delay)
  .then(() => mockStories);

export const getStory = (storyId: string, delay?: number) => {
  return delayPromise(delay)
    .then(() => _.find(mockStories, (story) => story.id === storyId));
};
