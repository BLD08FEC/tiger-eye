import React from 'react';

const Question = ({ displayedQuestions }) => (
  <div className="q">
    <div className="row">
      <div className="question">{displayedQuestions}</div>
    </div>
  </div>
);

export default Question;
