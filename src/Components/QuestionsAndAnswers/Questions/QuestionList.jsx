/* eslint-disable */

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

  componentDidMount() {
    const results = [];
    results.push(data.results[this.state.currentQuestion]);
    this.setState({ displayedQuestions: results });
    this.incrementCurrentQuestion();
    results.push(data.results[this.state.currentQuestion]);
    this.setState({ displayedQuestions: results });
    this.incrementCurrentQuestion();
  }

  incrementCurrentQuestion() {
    const currentNum = this.state.currentQuestion;
    this.setState((state) => ({ currentQuestion: currentNum + 1 }));
  }

  next() {
    const results = [];
    const max = this.state.data.results.length;
    if (max > this.state.currentQuestion + 2) {
      results.push(data.results[this.state.currentQuestion]);
      this.setState({ displayedQuestions: results });
      this.incrementCurrentQuestion();
      results.push(data.results[this.state.currentQuestion]);
      this.setState({ displayedQuestions: results });
      this.incrementCurrentQuestion();
    }
    if (max === this.state.currentQuestion + 1) {
      results.push(data.results[this.state.currentQuestion]);
      this.setState({ displayedQuestions: results });
      this.incrementCurrentQuestion();
    } else {
      this.state.displayedQuestions.push('No more questions');
    }
  }

  render() {
    return (
      this.state.displayedQuestions[this.state.currentQuestion] ? 
      (<div className="row question-list">
        <Question displayedQuestions={this.state.displayedQuestions[this.state.currentQuestion].question_body} />
        {/* <Question displayedQuestions={this.state.displayedQuestions[this.state.currentQuestion].question_body} /> */}
      </div>)
      : (<div></div>)
    );
  }
}

export default QuestionList;
