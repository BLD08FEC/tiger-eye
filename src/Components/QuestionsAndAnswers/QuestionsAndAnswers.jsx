import React from 'react';
import QuestionList from './Questions/QuestionList';
// import helpers from '../../Shared/api';
// require helpers from '../../shared/api.js'
// not sure how to import info from api calls

const QuestionsAndAnswers = () => (
  <div className="container questions-and-answers">
    <div className="row questions"><em>Common Questions Realated To This Product</em></div>
    <QuestionList className="row question-list" />
  </div>
);

export default QuestionsAndAnswers;
