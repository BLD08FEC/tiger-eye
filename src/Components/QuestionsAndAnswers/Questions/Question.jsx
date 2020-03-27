import React from 'react';
import './Question.scss';


const Question = ({ displayedQuestion }) => (
  <div className="question">
    <span>
      <div className="question-body">
        <h5>
          {`Q. ${displayedQuestion.question_body}`}
        </h5>
      </div>
      <div className="question-name">{displayedQuestion.asker_name}</div>
    </span>
  </div>
);

export default Question;
