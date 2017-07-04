import * as React from 'react';
import { Story } from './components/story';
export const Stories = () => {
  // document.body.style.backgroundColor = "green";
  const mockStories = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]

  const storyGrid = mockStories.map((story, index) => {
    return (
      <Story key={index}/>
    )
  })
  return (
    <div className="row row-center">
      <div className="small-12 medium-10 columns tip-stories">
        <div className="row row-center tip-section">
          <div className="small-12 columns tip-subsection shrink">
            <div className="tip-massive-heading">
              Stories.
            </div>
          </div>
        </div>
        <div className="tip-story-grid">
          {storyGrid}
        </div>
      </div>
    </div>
  );
}

