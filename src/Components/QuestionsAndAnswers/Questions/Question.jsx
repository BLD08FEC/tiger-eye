import React from 'react';
import './Question.scss';


const Question = ({ displayedQuestion }) => {
  // let formatDate = function(displayedQuestion.question_date) {
  //   let dateStr = '';
  //   let dateArr = displayedQuestion.question_date.split('-'); 
  //   let monthNum = function(dateArr[0]){
  //     if (dateArr[0][1]) {

  //     }
  //   };
  //   dateStr + dateArr[2]
  //   console.log(dateArray)
  //   let year = displayedQuestion.question_date.slice(0,4);
  //   let months = [January, Feburary, March, April, May, June, July, August, September, October, November, December]
  // }
  // formatDate();

  return (
    <div className="question">
      <span>
        <div className="question-body">
          <h5>{`Q. ${displayedQuestion.question_body}`}</h5>
        </div>
        <h7>
          <div className="question-helpfulness">{`Helpful? Yes (${displayedQuestion.question_helpfulness}) | Add Answer(link)`}</div>
        </h7>
        <hr></hr>
      </span>
    </div>

  )
}


export default Question;
