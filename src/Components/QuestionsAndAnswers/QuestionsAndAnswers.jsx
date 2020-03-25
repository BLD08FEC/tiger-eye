import React from "react";
import QuestionList from "./Questions/QuestionList";
import Search from "../../Shared/Search/search";
// import helpers from '../../Shared/api';
// require helpers from '../../shared/api.js'
// not sure how to import info from api calls

const QuestionsAndAnswers = () => (
  <div className="container questions-and-answers">
    <div className="questions">
      <em>Common Questions Realated To This Product</em>
    </div>
    <hr />
    <Search />
    <QuestionList className="row question-list" />
    <div className="lower-btns">
      <div className="question-btn-div">
        <button type="button" className="question-btn">
          Show More Answered Questions
        </button>
      </div>
      <button type="button" className="question-btn">
        Add A Question +
      </button>
    </div>
  </div>
);

export default QuestionsAndAnswers;
