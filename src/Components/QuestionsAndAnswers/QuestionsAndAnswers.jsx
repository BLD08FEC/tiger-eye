/* eslint-disable */
import React from 'react';
import QuestionList from './Questions/QuestionList';
import Search from '../../Shared/Search/search';
import AnswerList from './Answers/AnswerList';
import './QuestionsAndAnswers.scss'

const QuestionsAndAnswers = (props) => {
  return (
    <div className="container questions-and-answers">
      <p></p>
      <div className="questions">
        <em>Questions and Answers</em>
        <p></p>
      <Search />
      <QuestionList className="question-list" />
      </div>
      <p></p>
    </div>
  );
};

export default QuestionsAndAnswers;
