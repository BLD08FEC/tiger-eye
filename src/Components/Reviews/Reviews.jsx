/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Review from './Review.jsx';
import helperAPI from '../../Shared/api';

// const data = ['REVIEW NUMBER ONE', 'REVIEW NUMBER TWO', 'REVIEW NUMBER THREE'];

class Reviews extends React.Component {
  // helperAPI.getReviews()
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }
  componentDidMount() {
    const reviewsAPI = [];
    helperAPI.getReviews(1, (data) => {
      data.results.map(review => {
        reviewsAPI.push(review);
        })
      })
      this.setState({
        reviews: reviewsAPI
      })
    }
  render() {
      var list = this.state.reviews.map((review, index) => {
          return (<Review review={review} key={index}/>)
      })
  return (<div>{list}</div>)
  }
};

export default Reviews;