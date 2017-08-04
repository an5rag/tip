import * as React from 'react';
import { Story, IStoryProps } from './components/story-box';
export const Stories = () => {
  // document.body.style.backgroundColor = "green";
  const mockStories: IStoryProps[] = [
    { title: "First story", image: "http://www.picture-organic-clothing.com/wp-content/uploads/cache/2017/01/CF028308/1832357229.jpg" },
    { title: "Second story", image: "http://www.ikea.com/gb/en/images/products/myttinge-picture-love__0455526_pe603579_s5.jpg" },
    { image: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6--funny-things-funny-stuff.jpg" },
    { image: "http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/hubs/thebigpicture/the-big-picture-photography-competition-round-430/Will%20Clarke%20-%20bears%20Neuschonau,%20Bavaria,%20Germany-xlarge.jpg" },
    { image: "http://nation.com.pk/digital_images/large/2016-06-09/picture-of-the-day-1465472080-2275.jpg" },
    {}
  ]

  const storyGrid = mockStories.map((story, index) => {
    return (
      <Story key={index} title={story.title} image={story.image}/>
    )
  })
  return (
    <div className="row row-center">
      <div className="small-12 columns tip-stories">
        <div className="row row-center tip-section">
          <div className="small-12 columns tip-subsection shrink">
          </div>
        </div>
        <div className="tip-story-grid">
          {storyGrid}
        </div>
      </div>
    </div>
  );
}

