/* eslint-disable */
import React from 'react';
import Question from './Question';
import helperAPI from '../../../Shared/api';
import Search from '../../../Shared/Search/search';
// import data from '../dumData';

// helper API func = helpers.getQuestions(productId, cb){}

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 3,
      currentQuestion: 0,
      displayedQuestions: [],
      allQuestions: [],
    };
    // this.allQuestions = this.allQuestions.bind(this);
    // this.currentQuestion = this.currentQuestion.bind(this);
    // this.displayedQuestions = this.displayedQuestions.bind(this);
    // const productQuestions = data.results,
  }

  async componentDidMount() {
    // const display = [];
    const allQuestions = this.state.allQuestions
    const addInitialQuestions = async () => {
      await helperAPI.getQuestions(3, (data) => {
        if (data.results.length >= 2) {
          this.setState({
            allQuestions: [...data.results],
            displayedQuestions: data.results.slice(0, 2)
          });
          // this.setState({ displayedQuestions: data.results });
          console.log("All Questions test1 ====== ", this.state.allQuestions, this.state.displayedQuestions);
        } else if (allQuestions === 1) {
          this.incrementCurrentQuestion();
          this.setState({ displayedQuestions: data.results.slice(0, 1) });
        } 
        // else {
        //   this.setState({ displayedQuestions: "No Questions to Display" });
        // }
      })
    }
    // await apiQuestions();
    addInitialQuestions();
  }
    // await console.log("All Questions test2 ====== ", this.state.allQuestions)
    // this.setState({ allQuestions: [...data.results], displayedQuestions: data.results.slice(0,2) });
    
    // const addTwoQuestions = () => {
    //   if (this.state.allQuestions.length >= 2) {
    //     for (let i = 0; i < 2; i++) {
    //       display.push(this.state.allQuestions[i]);
    //       this.incrementCurrentQuestion();
    //     }
    //     console.log('displayed Questions ========', this.state.displayedQuestions);
    //     this.setState({ displayedQuestions: results });
    //   } else if (this.state.allQuestions === 1) {
    //     display.push(this.state.allQuestions[1]);
    //     this.incrementCurrentQuestion();
    //     this.setState({ displayedQuestions: results });
    //   } else {
    //     display.push("No Questions to Display");
    //   }
    // }
    // await addTwoQuestions();
    // console.log('All Questions test2 ======', this.state.allQuestions)


    // helpersAPI.getQuestions(3, (data) => {
    //   data.results.forEach(q => results.push(q));
    //   this.setState({ allQuestions: results })
    //   Promise.all(this.state.allQuestions)
    //   .then( () => {
    //     console.log("All Questions test2 ====== ", this.state.allQuestions.length)
    //     if (this.state.allQuestions >= 2) {
    //       for (let i = 0; i < 2; i++) {
    //         display.push(this.state.allQuestions[i]);
    //         this.incrementCurrentQuestion();
    //       }
    //       this.setState({ displayedQuestions: results });
    //       console.log('displayed Questions ========', this.state.displayedQuestions);
    //     } else if (this.state.allQuestions === 1) {
    //       display.push(this.state.allQuestions[1]);
    //       this.incrementCurrentQuestion();
    //       this.setState({ displayedQuestions: results });
    //     } else {
    //       display.push("No Questions to Display");
    //     }
    //   })
    //   console.log('All Questions test ======', this.state.allQuestions, this.state.currentProduct)
    // })

    // Default load up to 2 questions max or if none, display "no questions" message


  // addQuestionToPage(data) {

  // }

  incrementCurrentQuestion() {
    const currentNum = this.state.currentQuestion;
    this.setState((state) => ({ currentQuestion: currentNum + 1 }));
  }

  // nextTwo() {
  //   const results = [];
  //   const max = this.state.allQuestions.length;
  //   if (max > this.state.currentQuestion + 2) {
  //     results.push(data.results[this.state.currentQuestion]);
  //     this.setState({ displayedQuestions: results });
  //     this.incrementCurrentQuestion();
  //     results.push(data.results[this.state.currentQuestion]);
  //     this.setState({ displayedQuestions: results });
  //     this.incrementCurrentQuestion();
  //   }
  //   if (max === this.state.currentQuestion + 1) {
  //     results.push(data.results[this.state.currentQuestion]);
  //     this.setState({ displayedQuestions: results });
  //     this.incrementCurrentQuestion();
  //   } else {
  //     this.state.displayedQuestions.push('No more questions');
  //   }
  // }

  // need to map displayedQuestions array in state to be rendered individually
  render() {
    return this.state.displayedQuestions.length > 0 ? (
      <>
      <hr></hr>
      <em>List of Answered Questions</em>
        
        <div className="question-list">
          {this.state.displayedQuestions.map((question, key) => {
            console.log(key);
            return (
              <div>
                <Question 
                  displayedQuestion={question} 
                  key={key} 
                />
              </div>
            ); 
          }
          )}
         
        </div>
        <div className="question-btn-div">
          <button type="button" className="question-btn">Show More Answered Questions</button>
        </div>
      </>
    ) : (
      <div>render if false</div>
    )
  }
}

export default QuestionList;
