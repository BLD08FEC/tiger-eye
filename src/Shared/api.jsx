import React from 'react';
import axios from 'axios';


// API location: http://3.134.102.30/
// connection info pulled from: https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-products_api-md

// The different data services for this api are
// Cart
// Interactions
// Products
// Questions & Answers
// Reviews

// ========  potential refactor to clean up code and enable single module export

// const helpersAPI = {
//   getCart(userToken, cb) {
//     axios.get(`http://3.134.102.30/cart/${userToken}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   // post: /cart/
//   addToCart(userToken, cb) {
//     axios.post('http://3.134.102.30/cart/')
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   // ======= Interactions API ==============

//   logInteraction(userToken, cb) {
//     axios.post('http://3.134.102.30/interactions')
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   // ======= Products =====================
//   // GET / products / list
//   getProducts(productId, cb) {
//     axios.get('http://3.134.102.30/products/list')
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   getProduct(productId, cb) {
//     axios.get(`http://3.134.102.30/products/${productId}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   getProductStyle(productId, cb) {
//     axios.get(`http://3.134.102.30/products/${productId}/styles`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },


//   // ======= Related Products ==============

//   getRelatedProduct(productId, cb) {
//     axios.get(`http://3.134.102.30/products/${productId}/related`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },


//   // ======= Question and Answers ==========
//   // Get

//   getQuestions(productId, cb) {
//     axios.get(`http://3.134.102.30/qa/${productId}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   getAnswers(questionId, cb) {
//     axios.get(`http://3.134.102.30/qa/${questionId}/answers`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   // Post
//   postQuestion(productId, cb) {
//     axios.post(`http://3.134.102.30/qa/${productId}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   postAnswer(questionId, cb) {
//     axios.post(`http://3.134.102.30/qa/${questionId}/answers`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   // review Question
//   // PUT / qa / question /: question_id / helpful

//   markQuestionHelpful(questionId, cb) {
//     axios.put(`http://3.134.102.30/qa/question/${questionId}/helpful`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   reportQuestion(questionId, cb) {
//     axios.put(`http://3.134.102.30/qa/question/${questionId}/report`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   // review Answer
//   // PUT / qa / answer /: question_id / helpful

//   markAnswerHelpful(answerId, cb) {
//     axios.put(`http://3.134.102.30/qa/answer/${answerId}/helpful`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   reportAnswer(answerId, cb) {
//     axios.put(`http://3.134.102.30/qa/answer/${answerId}/report`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },


//   // ========== Reviews ============

//   // GET /reviews/:product_id/list
//   getReviews(productId, cb) {
//     axios.get(`http://3.134.102.30/reviews/${productId}/list`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   getReviewMeta(productId, cb) {
//     axios.get(`http://3.134.102.30/reviews/${productId}/meta`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   postReview(productId, cb) {
//     axios.post(`http://3.134.102.30/reviews/${productId}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   markReviewHelpful(reviewId, cb) {
//     axios.put(`http://3.134.102.30/reviews/helpful/${reviewId}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },

//   reportReview(reviewId, cb) {
//     axios.put(`http://3.134.102.30/reviews/report/${reviewId}`)
//       // .then((res) => console.log(res.data));
//     .then(res.data => cb(res.data))
//     .catch(err => cb(error))
//   },
// };


// ======= ORIGINAL CODE BELOW ===========
// \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
// ======== Cart API =====================

// get   = /cart/:user_token
const getCart = (userToken, cb) => {
  axios.get(`http://3.134.102.30/cart/${userToken}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

// post = /cart/
const addToCart = (userToken, cb) => {
  axios.post('http://3.134.102.30/cart/')
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

// ======== Interactions API ==============

const logInteraction = (userToken, cb) => {
  axios.post('http://3.134.102.30/interactions')
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

// ======== Products =====================
// GET / products / list
const getProducts = (productId, cb) => {
  axios.get('http://3.134.102.30/products/list')
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const getProduct = (productId, cb) => {
  axios.get(`http://3.134.102.30/products/${productId}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const getProductStyle = (productId, cb) => {
  axios.get(`http://3.134.102.30/products/${productId}/styles`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};


// ======== Related Products ==============

const getRelatedProduct = (productId, cb) => {
  axios.get(`http://3.134.102.30/products/${productId}/related`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};


// ======== Question and Answers ==========

// Get
const getQuestions = (productId, cb) => {
  axios.get(`http://3.134.102.30/qa/${productId}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const getAnswers = (questionId, cb) => {
  axios.get(`http://3.134.102.30/qa/${questionId}/answers`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

// Post
const postQuestion = (productId, cb) => {
  axios.post(`http://3.134.102.30/qa/${productId}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const postAnswer = (questionId, cb) => {
  axios.post(`http://3.134.102.30/qa/${questionId}/answers`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

// review Question
// PUT / qa / question /: question_id / helpful

const markQuestionHelpful = (questionId, cb) => {
  axios.put(`http://3.134.102.30/qa/question/${questionId}/helpful`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const reportQuestion = (questionId, cb) => {
  axios.put(`http://3.134.102.30/qa/question/${questionId}/report`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

// review Answer
// PUT / qa / answer /: question_id / helpful

const markAnswerHelpful = (answerId, cb) => {
  axios.put(`http://3.134.102.30/qa/answer/${answerId}/helpful`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const reportAnswer = (answerId, cb) => {
  axios.put(`http://3.134.102.30/qa/answer/${answerId}/report`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};


// =========== Reviews ============

// GET /reviews/:product_id/list
const getReviews = (productId, cb) => {
  axios.get(`http://3.134.102.30/reviews/${productId}/list`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const getReviewMeta = (productId, cb) => {
  axios.get(`http://3.134.102.30/reviews/${productId}/meta`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const postReview = (productId, cb) => {
  axios.post(`http://3.134.102.30/reviews/${productId}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const markReviewHelpful = (reviewId, cb) => {
  axios.put(`http://3.134.102.30/reviews/helpful/${reviewId}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};

const reportReview = (reviewId, cb) => {
  axios.put(`http://3.134.102.30/reviews/report/${reviewId}`)
    .then((res) => console.log(res.data));
  // .then(res.data => cb(res.data))
  // .catch(err => cb(error))
};


// debating between Add vs Post for naming methods.
// ex: addQuestion / addAnswer vs postQuestion / postAnswer
// applies to reviews & questions post methods
// generally add is more intuitive but post is the type of request...

module.exports(
  // helpersAPI,
  logInteraction,
  getCart,
  addToCart,
  getProducts,
  getProduct,
  getProductStyle,
  getRelatedProduct,
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer,
  getReviews,
  getReviewMeta,
  postReview,
  markReviewHelpful,
  reportReview,
);

// export default helpers;
