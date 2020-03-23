/* eslint-disable */

import React from 'react';
import Question from './Question';
import helpersAPI from '../../../Shared/api';
// import data from '../dumData';


// helper API func = helpers.getQuestions(productId, cb){}

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 0,
      currentQuestion: 0,
      displayedQuestions: [],
      allQuestions: [],
    };
    // this.currentQuestion = this.currentQuestion.bind(this);
    // this.displayedQuestions = this.displayedQuestions.bind(this);
    // const productQuestions = data.results,
  }

  componentDidMount() {
    const results = [];
    const productQuestions = helpersAPI.getQuestions(3, (data) => {
      this.setState({currentProduct: data.product_id})
      data.results.forEach(q => results.push(q))
      this.setState({ allQuestions: results })
      // console.log('currentProduct ======', this.state.allQuestions, this.state.currentProduct)
    });

    //Default load up to 2 questions max or if none, display "no questions" message
    const display = [];
    if (this.state.allQuestions >=2) {
      for (let i = 0; i < 2; i++) {
        display.push(this.state.allQuestions[i]);
        this.incrementCurrentQuestion();
      }
      this.setState({ displayedQuestions: results });
    } else if (this.state.allQuestions === 1) {
      display.push(this.state.allQuestions[i]);
      this.incrementCurrentQuestion();
      this.setState({ displayedQuestions: results });
    } else {
      display.push("No Questions to Display");
    }

    // const max = productQuestions.lenght;
    // if (max > this.state.currentQuestion + 2) {
    //   results.push(data.results[this.state.currentQuestion]);
    //   this.setState({ displayedQuestions: results });
    //   this.incrementCurrentQuestion();
    //   results.push(data.results[this.state.currentQuestion]);
    //   this.setState({ displayedQuestions: results });
    //   this.incrementCurrentQuestion();
    // }
    // if (max === this.state.currentQuestion + 1) {
    //   results.push(data.results[this.state.currentQuestion]);
    //   this.setState({ displayedQuestions: results });
    //   this.incrementCurrentQuestion();
    // } else {
    //   this.state.displayedQuestions.push('No more questions');
    // }

    // const data = helpersAPI.getQuestions(3, result => {
    //   this.setState({
    //     displayedQuestions: results;
    //   });
    // });

  }

  addQuestionToPage(data) {

  }

  incrementCurrentQuestion() {
    const currentNum = this.state.currentQuestion;
    this.setState((state) => ({ currentQuestion: currentNum + 1 }));
  }

  nextTwo() {
    const results = [];
    const max = this.state.allQuestions.length;
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

  // need to map displayedQuestions array in state to be rendered individually
  render() {
    return (
      this.state.displayedQuestions.length > 0 ? 
      (<div className="row question-list">
        <Question displayedQuestions={this.state.displayedQuestions[this.state.currentQuestion].question_body} />
        {/* <Question displayedQuestions={this.state.displayedQuestions[this.state.currentQuestion+1].question_body} /> */}
      </div>)
      : (<div></div>)
    );
  }
}

export default QuestionList;
