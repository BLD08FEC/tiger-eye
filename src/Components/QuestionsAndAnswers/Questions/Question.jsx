import React from 'react';

const Question = ({ displayedQuestion }) => (
  <div className="q">
    <div className="row">
      <div className="question">{displayedQuestion}</div>
    </div>
    <div className="row">
      <button type="button">Show More Questions</button>
    </div>
  </div>
);


export default Question;
