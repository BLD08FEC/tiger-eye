/* eslint-disable */
import React from 'react';
import QuestionList from './Questions/QuestionList';
import Search from '../../Shared/Search/search';
import AnswerList from './Answers/AnswerList';

const QuestionsAndAnswers = (props) => {
  return (
    <div className="container questions-and-answers">
      <div className="questions">
        <em>Common Questions Realated To This Product</em>
      </div>
      <hr />
      <Search />
      <QuestionList className="row question-list" />
      {/* <AnswerList className="row answer-list" /> */}
      <hr />
    </div>
  );
};

export default QuestionsAndAnswers;
