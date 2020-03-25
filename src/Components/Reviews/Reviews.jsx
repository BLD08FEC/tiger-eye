/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Review from './Review.jsx';
import helperAPI from '../../Shared/api';

const data = ['REVIEW NUMBER ONE', 'REVIEW NUMBER TWO', 'REVIEW NUMBER THREE'];

class Reviews extends React.Component {
  // helperAPI.getReviews()
  
  render() {
      var list = data.map((review, index) => {
          return (<Review review={review} key={index}/>)
      })
  return (<div>{list}</div>)
  }
};

export default Reviews;