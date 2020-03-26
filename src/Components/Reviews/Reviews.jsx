/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Review from './Review';
import helperAPI from '../../Shared/api';

// const data = ['REVIEW NUMBER ONE', 'REVIEW NUMBER TWO', 'REVIEW NUMBER THREE'];

class Reviews extends React.Component {
  // helperAPI.getReviews()
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    helperAPI.getReviews(1, (data) => {
      this.setState({
        reviews: data.results,
      });
    });
  }

  render() {
    const { reviews } = this.state;
    const list = reviews.map((review, index) => (<Review review={review} key={review.review_id} />));
    return (<div>{list}</div>);
  }
}

export default Reviews;
