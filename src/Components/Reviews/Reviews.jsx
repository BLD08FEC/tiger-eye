/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Review from './Review';
import Ratings from './Ratings';
import helperAPI from '../../Shared/api';

class Reviews extends React.Component {
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
    return (
      <div className="">
        <div className="">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
              <Ratings />
            </div>
            <div className="col-12 col-sm-12 col-lg-8 col-xl-8">
              {list}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
