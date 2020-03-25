import React from 'react';
import './Answer.scss';

const Answer = ({ displayedAnswer, key }) => (
  <div className="answer">
    <div>
      <div className="answer-body">
        <p>
          A.
          {displayedAnswer}
        </p>
      </div>
    </div>
  </div>
);

export default Answer;
