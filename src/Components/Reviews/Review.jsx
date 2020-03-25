/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Review extends React.Component {
    render() {
        console.log(this.props.review.summary)
        return (
            <div>
                <div className="review-rating"><em><strong>RATING: </strong>{this.props.review.rating}</em></div>
                <div className="review-date"><em><strong>DATE: </strong>{this.props.review.date}</em></div>
                <div className="review-summary"><em><strong>{this.props.review.summary}</strong></em></div>
                <div className="review-body"><em>{this.props.review.body}</em></div>
                <div className="review-recommend"><em>{this.props.review.recommend}</em></div>
                <div className="review-reviewer-name"><em>{this.props.review.reviewer_name}</em></div>
                <div className="review-response"><em>{this.props.review.response}</em></div>
            </div>
        )
    }
}

export default Review;