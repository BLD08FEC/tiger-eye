import React from 'react';
import Question from './Question';
import data from '../dumData';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.results,
      currentQuestion: data.results[0].question_id,
      displayedQuestions: [],
    };
    this.default = this.default.bind(this);
    this.next = this.next.bind(this);
  }

  default() {
    let increment = this.state.currentQuestion;
    displayedQuestions.push(data.currentQuestion);
    displayedQuestions.push(data.currentQuestion + 1);
    increment += 2;
    this.setState({ currentQuestion: increment });
  }

  next() {
    let increment = this.state.currentQuestion;
    const max = this.state.data.length;
    if (max > currentQuestion + 2) {
      displayedQuestions.push(data.currentQuestion + 1);
      displayedQuestions.push(data.currentQuestion + 2);
      increment += 2;
    }
    if (max = currentQuestion + 1) {
      displayedQuestions.push(Question);
      increment += 1;
    } else {
      displayedQuestions.push('No more questions');
    }
    this.setState({ currentQuestion: increment });
  }

  render() {
    return (
      <div className="row question-list">
        <Question displayedQuestion={displayedQuestions[this.state.currentQuestion].question_body} />
        <Question displayedQuestion={displayedQuestions[this.state.currentQuestion + 1].question_body} />
      </div>
    );
  }
}

export default QuestionList;
