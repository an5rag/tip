import * as React from 'react';
export const Stories = () => {
  // document.body.style.backgroundColor = "green";
  const mockStories = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]

  const storyGrid = mockStories.map((story, index) => {
    return (
      <div key={index} className="tip-story-box" />
    )
  })
  return (
    <div className="row row-center">
      <div className="small-12 medium-10 columns tip-stories">
        <div className="tip-story-grid">
          {storyGrid}
        </div>
      </div>
    </div>
  );
}

