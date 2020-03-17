/* eslint-disable react/destructuring-assignment */
// eslint(react/no-unused-state)
import React from 'react';
import Question from './Question';
import data from '../dumData';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      displayedQuestions: [],
    };
    // this.currentQuestion = this.currentQuestion.bind(this);
    // this.displayedQuestions = this.displayedQuestions.bind(this);
    // const productQuestions = data.results,
  }

  default(state) {
    this.setState(state.displayedQuestions.push(data.results[this.currentQuestion]));
    this.incrementCurrentQuestion();
    this.setState(state.displayedQuestions.push(data.results[this.currentQuestion]));
    this.incrementCurrentQuestion();
  }

  incrementCurrentQuestion() {
    this.setState((state) => ({ currentQuestion: state.currentQuestion + 1 }));
  }

  next() {
    const max = this.state.data.results.length;
    if (max > this.state.currentQuestion + 2) {
      this.state.displayedQuestions.push(data.results.currentQuestion);
      this.incrementCurrentQuestion();
      this.state.displayedQuestions.push(data.results.currentQuestion);
      this.incrementCurrentQuestion();
    }
    if (max === this.state.currentQuestion + 1) {
      this.state.displayedQuestions.push(Question);
      this.incrementCurrentQuestion();
    } else {
      this.state.displayedQuestions.push('No more questions');
    }
  }

  render() {
    return (
      <div className="row question-list">
        <Question displayedQuestion={this.state.displayedQuestions[this.currentQuestion].question_body} />
        <Question displayedQuestion={this.state.displayedQuestions[this.currentQuestion + 1].question_body} />
      </div>
    );
  }
}

export default QuestionList;
