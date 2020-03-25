import React from 'react';
import "./Question.scss";


const Question = ({ displayedQuestions, key }) => (
  <div className="question">
    <div className="qustion-name">{displayedQuestions.name}</div>
    <div className="question-body">{displayedQuestions.body}</div>
  </div>
);

export default Question;
