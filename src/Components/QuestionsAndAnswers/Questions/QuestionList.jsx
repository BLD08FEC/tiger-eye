/* eslint-disable */
import React from 'react';
import Question from './Question';
import helperAPI from '../../../Shared/api';
import Search from '../../../Shared/Search/search';
import QuestionsAndAnswers from '../QuestionsAndAnswers';
import {connect} from 'react-redux';
// import Answer from '../Answers/Answer';
// import AnswerList from ''../Answers/AnswerList';

// helper API func = helpers.getQuestions(productId, cb){}

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 1,
      currentQuestion: 0,
      displayedQuestions: [],
      allQuestions: [],
    };
    this.addTwoQuestions = this.addTwoQuestions.bind(this);
  }

  async componentDidMount() {
    // const { allQuestions } = this.state;
    // await this.setState({currentProduct: this.props.productData.id})

    const addInitialQuestions = async () => {
      // console.log(this.state.currentProduct)

      await helperAPI.getQuestions(this.state.currentProduct, (data) => {
        this.setState({ allQuestions: [...data.results] });
        if (data.results.length >= 2) {
          this.setState({ displayedQuestions: data.results.slice(this.state.currentQuestion, this.state.currentQuestion + 2) });
          this.incrementCurrentQuestion();
          this.incrementCurrentQuestion();
          // console.log('All Questions test1 ====== ', this.state.allQuestions, this.state.displayedQuestions);
        } else if (data.results.length === 1) {
          this.incrementCurrentQuestion();
          this.setState({ displayedQuestions: data.results.slice(0, 1) });
        } else if (data.results.length === 0) {
          let display = this.state.displayedQuestions;
          display.push({
            "question_body":'No Questions to Display Yet..',
            "asker_name": "Add Your Question",
            "question_helpfulness": 10,
          })
          this.setState({ displayedQuestions: display });
        }
      });
    };
    addInitialQuestions();
  }
  // await console.log("All Questions test2 ====== ", this.state.allQuestions)
  // this.setState({ allQuestions: [...data.results], displayedQuestions: data.results.slice(0,2) });

  addTwoQuestions() {
    // console.log("add two test ======", this.state.allQuestions, this.state.currentQuestion, this.state.displayedQuestions)
    if (this.state.allQuestions.length - this.state.displayedQuestions.length >= 2) {
      this.setState({
        displayedQuestions: [...this.state.displayedQuestions, this.state.allQuestions[this.state.currentQuestion], this.state.allQuestions[this.state.currentQuestion + 1]]
      });
      this.incrementCurrentQuestion();
      this.incrementCurrentQuestion();
      // console.log('All Questions test1 ====== ', this.state.allQuestions, this.state.displayedQuestions);
    } else if (this.state.allQuestions.length - this.state.displayedQuestions.length === 1) {
      console.log("inside ======",  ...this.state.displayedQuestions)
      this.setState({ displayedQuestions: [...this.state.displayedQuestions, this.state.allQuestions[this.state.currentQuestion]] });
      this.incrementCurrentQuestion();
    } else if (this.state.allQuestions.length - this.state.displayedQuestions.length === 0) {
      let display = this.state.displayedQuestions;
      display.push({
            "question_body":'Have a Question of your own?',
            "asker_name": "Add it below...",
            "question_helpfulness": 10,
      })
      this.setState({ displayedQuestions: display });
    }
  }

  incrementCurrentQuestion() {
    const currentNum = this.state.currentQuestion;
    this.setState({ currentQuestion: currentNum + 1 });
  }


  render() {
    return this.state.displayedQuestions.length > 0 ? (
      <>
        <div className="question-list">
          {this.state.displayedQuestions.map((question, key) => {
            // console.log(key);
            return (
                <div>
                  <Question displayedQuestion={question} key={key} />
                </div>
            );
          })}
          <div className="lower-btns">
            <p></p>
            <div className="question-btn-div-1">
              <button
                type="button"
                className="question-btn"
                onClick={this.addTwoQuestions}
              >
                Show More Questions
              </button>
            </div>
            <div className="question-btn-div-2">
              <button type="button" className="question-btn">
                Add A Question +
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div>render if false</div>
    );
  }
}

const mapStateToProps = state => ({
  productData: state.productDataReducer.productData
});

export default connect(mapStateToProps)(QuestionList);
