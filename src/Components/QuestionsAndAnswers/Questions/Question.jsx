import React from 'react';

const Question = ({ displayedQuestions }) => (
  <div className="q">
    <div className="row">
      <div className="question">{displayedQuestions}</div>
    </div>
    <div className="row">
      <button type="button">Show More Questions</button>
    </div>
  </div>
);

// buttn func = onClick = { next() }

export default Question;
