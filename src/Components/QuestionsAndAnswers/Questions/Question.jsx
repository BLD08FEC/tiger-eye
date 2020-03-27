import React from 'react';
import './Question.scss';


const Question = ({ displayedQuestion }) => (
  <div className="question">
    <span>
      <div className="question-body">
        <h5>{`Q. ${displayedQuestion.question_body}`}</h5>
      </div>
      <h7>
        <div className="question-helpfulness">{`Helpful? Yes (${displayedQuestion.question_helpfulness}) | Add Answer(link)`}</div>
      </h7>
      <hr />
    </span>
  </div>
);


export default Question;
