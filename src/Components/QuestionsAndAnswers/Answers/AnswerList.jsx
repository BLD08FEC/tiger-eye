/* eslint-disable */
import React from 'react';
import Answer from './Answer';
import helperAPI from '../../../Shared/api';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 3,
      currentAnswer: 0,
      displayedAnswers: [],
      allAnswers: [],
    };
  }

  async componentDidMount() {
    // const allAnswers = this.state.allAnswers;
    const addInitialAnswers = async () => {
      await helperAPI.getAnswers(this.state.currentProduct, data => {
        this.setState({ allAnswers: [...data.results] });
        if (data.results.length >= 2) {
          this.setState({ displayedAnswers: data.results.slice(0, 2) });
          console.log(
            "All Questions test1 ====== ",
            this.state.allAnswers,
            this.state.displayedAnswers
          );

        } else if (data.results.length === 1) {
          this.incrementCurrentAnswer();
          this.setState({ displayedAnswers: data.results.slice(0, 1) });
        } else {
          this.setState({ displayedAnswers: ['No Answers Available For This Question... Yet'] });
        }
      });
    };
    addInitialAnswers();
  }

  incrementCurrentAnswer() {
    const currentNum = this.state.currentAnswer;
    this.setState((state) => ({ currentAnswer: currentNum + 1 }));
  }

  render() {
      return this.state.displayedAnswers.length > 0 ? (
          <>
            <em>Answer = Below </em>
            <div className="answer-list">
                {this.state.displayedQuestions.map((answer, key) => {
                    return (
                        <div>
                            <Answer 
                            displayedAnswer={answer}
                            key={key}
                            />
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