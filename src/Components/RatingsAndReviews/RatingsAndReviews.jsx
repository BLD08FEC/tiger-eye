import React, { Component } from 'react';
import './RatingsAndReviews.scss';
import RatingArea from './RRComponents/RatingArea/RatingArea';
import ReviewsArea from './RRComponents/ReviewsArea/ReviewsArea';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProductId: 5,
      reviewsList: {},
      product: 0,
      count: 5,
      results: [],
      reviewsMeta: {},
      ratings: {},
      recommended: {},
      characteristics: {},
    };
  }

  componentDidMount() {
    const { mainProductId } = this.state;

    async function getMeta() {
      const response = await fetch(`http://52.26.193.201:3000/reviews/${mainProductId}/meta`);
      const data = await response.json();
      return data;
    }

    async function getList() {
      const response = await fetch(`http://52.26.193.201:3000/reviews/${mainProductId}/list`);
      const data = await response.json();
      return data;
    }

    getList(mainProductId)
      .then((data) => this.setState({
        reviewsList: data,
        product: data.product,
        count: data.count,
        results: data.results,
      }));

    getMeta(mainProductId)
      .then((data) => this.setState({
        reviewsMeta: data,
        ratings: data.ratings,
        recommended: data.recommended,
        characteristics: data.characteristics,
      }));
  }

  render() {
    const {
      reviewsList, product, count, results, reviewsMeta, ratings, recommended, characteristics,
    } = this.state;

    return (
      <div className="container-fluid rr-main">
        <div className="row">
          RATINGS & REVIEWS
        </div>
        <div className="row">
          <div className="col-xs-4 rr-rating-area">
            <RatingArea reviewsMeta={reviewsMeta} product={product} count={count} results={results} />
          </div>
          <div className="col-xs-8 rr-reviews-area">
            <ReviewsArea reviewsList={reviewsList} ratings={ratings} recommended={recommended} characteristics={characteristics} />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
