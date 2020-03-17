// eslint(react/no-unused-state)
import React from 'react';
import Question from './Question';
import data from '../dumData';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: data.results[0].question_id,
      displayedQuestions: [data.results[0].question_id, data.results[1].question_id],
    };
    this.default = this.default.bind(this);
    this.next = this.next.bind(this);
  }

  default() {
    let increment = this.state.currentQuestion;
    this.state.displayedQuestions.push(data.currentQuestion);
    this.state.displayedQuestions.push(data.currentQuestion + 1);
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
        <Question displayedQuestion={this.state.displayedQuestions[this.state.currentQuestion].question_body} />
        <Question displayedQuestion={this.state.displayedQuestions[this.state.currentQuestion + 1].question_body} />
      </div>
    );
  }
}

export default QuestionList;
