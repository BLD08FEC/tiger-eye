/* eslint-disable */
import React from 'react';
import Answer from './Answer';
import helperAPI from '../../../Shared/api';
// import Question from "../Questions/Question";

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 6,
      // currentQuestion: 40,
      currentQuestion: props.questionID,
      currentAnswer: 0,
      displayedAnswers: [],
      allAnswers: []
    };
  }

  async componentDidMount() {
    // console.log("answer Q id ========", questionID);
    // const allAnswers = this.state.allAnswers;
    const addInitialAnswers = async () => {
      await helperAPI.getAnswers(this.props.questionID, data => {
        console.log("data ===== myles ", data.results)
        if (data.results !== undefined){
          this.setState({ allAnswers: [...data.results] });
          // console.log(
          //   "All Answers test1 ====== ",
          //   this.props.questionID,
          //   this.state.allAnswers,
          //   this.state.displayedAnswers
          // );
          if (data.results.length >= 2) {
            this.setState({ displayedAnswers: data.results.slice(0, 2) }, () => console.log("Myles test 2", this.state));
            this.incrementCurrentAnswer();
            this.incrementCurrentAnswer();
          } 
          if (data.results.length === 1) {
            // console.log("hello I'm inside the 1 func", data.results.length)
            this.setState({ displayedAnswers: data.results.slice(0, 1) }, () => console.log("Myles test 2", this.state));
            this.incrementCurrentAnswer();
          } 
          if (data.results.length === 0) {
            this.setState({
              displayedAnswers: [
                "No Answers Available For This Question... Yet"
              ]
            });
          }
        }
      });
    };
    addInitialAnswers();
  }

  addTwoAnswers() {
    // console.log("add two test ======", this.state.allAnswers, this.state.currentQuestion, this.state.displayedAnswers)
    if (
      this.state.allAnswers.length - this.state.displayedAnswers.length >= 2) {
      this.setState({
        displayedAnswers: [
          ...this.state.displayedAnswers,
          this.state.allAnswers[this.state.currentAnswer],
          this.state.allAnswers[this.state.currentAnswer + 1]
        ]
      });
      this.incrementCurrentAnswer();
      this.incrementCurrentAnswer();
      // console.log('All Answers test1 ====== ', this.state.allAnswers, this.state.displayedAnswers);
    } else if (this.state.allAnswers.length - this.state.displayedAnswers.length === 1) {
      console.log("inside ======", ...this.state.displayedAnswers);
      this.setState({
        displayedAnswers: [
          ...this.state.displayedAnswers,
          this.state.allAnswers[this.state.currentAnswer]
        ]
      });
      this.incrementCurrentAnswer();
    } else if ( this.state.allAnswers.length - this.state.displayedAnswers.length === 0) {
      let display = this.state.displayedAnswers;
      display.push({
        body: "Have a Answer of your own?",
        answerer_name: "Add it below...",
        helpfulness: 10
      });
      this.setState({ displayedAnswers: display });
    }
  }

  incrementCurrentAnswer() {
    const currentNum = this.state.currentAnswer;
    this.setState(state => ({ currentAnswer: currentNum + 1 }));
  }

  render() {
    return this.state.displayedAnswers.length > 0 ? (
      <>
        <p></p>
        <div className="answer-list">
          {this.state.displayedAnswers.map((answer, key) => {
            return (
              <div>
                <Answer displayedAnswer={answer} key={key} />
              </div>
            );
          })}
        </div>
      </>
    ) : (
      <div>render if answer = false</div>
    );
  }
}

export default AnswerList;