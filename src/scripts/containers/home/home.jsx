import React from 'react';

const styles = {
  fontFamily:"'Oswald', sans-serif",
  fontSize: "2em",
  padding:"1rem",
  lineHeight:"1.5",
  backgroundColor: "black"
}

export const Home = () => (
  <div className="row">
    <div className="bg-image-container">
      <img  className="bg-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Andrew_Classroom_De_La_Salle_University.jpeg/1200px-Andrew_Classroom_De_La_Salle_University.jpeg"/>
    </div>
    <p style={styles} className="columns shrink large-font primary-font">
        BREAKING GENDER STEREOTYPES IN THE CLASSROOM,<br/> ONE STORY AT A TIME.
    </p>
    <div className="columns"/>
  </div>
  
)