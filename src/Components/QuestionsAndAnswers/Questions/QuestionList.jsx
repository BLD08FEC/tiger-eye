// eslint(react/no-unused-state)
import React from 'react';
import Question from './Question';
import data from '../dumData';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialQuestion: 0,
      currentQuestion: 0,
      displayedQuestions: [],
    };
    this.initialQuestion = this.initialQuestion.bind(this);
    this.currentQuestion = this.currentQuestion.bind(this);
    this.displayedQuestions = this.displayedQuestions.bind(this);
    // const productQuestions = data.results,
  }


  default() {
    let increment = this.state.currentQuestion;
    this.setState(this.state.displayedQuestions.push(data.results[this.state.initialQuestion]));
    this.setState(this.state.displayedQuestions.push(data.results[this.state.initialQuestion +1]));
    increment += 2;
    this.setState({ currentQuestion: increment });
  }


  next() {
    let increment = this.state.currentQuestion;
    const max = this.state.data.results.length;
    if (max > this.state.currentQuestion + 2) {
      this.state.displayedQuestions.push(data.currentQuestion + 1);
      this.state.displayedQuestions.push(data.currentQuestion + 2);
      increment += 2;
    }
    if (max === this.state.currentQuestion + 1) {
      this.state.displayedQuestions.push(Question);
      increment += 1;
    } else {
      this.state.displayedQuestions.push('No more questions');
    }
    this.setState({ currentQuestion: increment });
  }

  render() {
    return (
      <div className="row question-list">
        <Question displayedQuestion={this.state.displayedQuestions[0].question_body} />
        <Question displayedQuestion={this.state.displayedQuestions[1].question_body} />
      </div>
    );
  }
}

export default QuestionList;
