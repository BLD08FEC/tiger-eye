import React from 'react';
import './Question.scss';


const Question = ({ displayedQuestions, key }) => (
  <div className="question">
    <div>{key}</div>
    <div className="qustion-name">{displayedQuestions.asker_name}</div>
    <div className="question-body">{displayedQuestions.question_body}</div>
  </div>
);

export default Question;
