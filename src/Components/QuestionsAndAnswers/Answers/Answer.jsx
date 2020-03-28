import React from 'react';
import './Answer.scss';

const Answer = ({ displayedAnswer, key }) => {
  if (displayedAnswer !== undefined) {
    const formatDate = (orig) => {
      let result = '';
      const dateArr = orig.split('-');
      const day = dateArr[2].slice(0, 2);
      const month = dateArr[1];
      const year = dateArr[0];
      const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const monthStr = months[month - 1];
      result = `${monthStr} ${day}, ${year}`;
      return result;
    };

    const date = formatDate(`${displayedAnswer.date}`);

    return (
      <div className="answer">
        <div>
          <div className="answer-body">
            <p>{`A. ${displayedAnswer.body} `}</p>
          </div>
          <div className="answer-name">
            <p>{`by ${displayedAnswer.name}, ${date}`}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div />
  );
};

export default Answer;
