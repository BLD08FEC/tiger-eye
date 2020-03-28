import axios from 'axios';

// API location: http://3.134.102.30/
// API location2*: http://52.26.193.201:3000
// connection info pulled from: https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-products_api-md

// The different data services for this api are
// Cart
// Interactions
// Products
// Questions & Answers
// Reviews

// ========  potential refactor to clean up code and enable single module export

const helperAPI = {
  getCart(userToken, cb) {
    axios.get(`http://52.26.193.201:3000/cart/${userToken}`)
      // .then((res) => console.log(res.data));
      .then((res) => {
        cb(res.data);
      })
      .catch((err) => {
        cb(err);
      });
  },
  // post: /cart/
  addToCart(userToken, cb) {
    axios.post('http://52.26.193.201:3000/cart/')
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // ======= Interactions API ==============
  logInteraction(userToken, cb) {
    axios.post('http://52.26.193.201:3000/interactions')
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // ======= Products =====================
  // GET / products / list
  getProducts(productId, cb) {
    axios.get('http://52.26.193.201:3000/products/list')
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  getProduct(productId, cb) {
    axios.get(`http://52.26.193.201:3000/products/${productId}`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  getProductStyle(productId, cb) {
    axios.get(`http://52.26.193.201:3000/products/${productId}/styles`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // ======= Related Products ==============
  getRelatedProduct(productId, cb) {
    axios.get(`http://52.26.193.201:3000/products/${productId}/related`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // ======= Question and Answers ==========
  // Get
  getQuestions(productId, cb) {
    axios.get(`http://52.26.193.201:3000/qa/${productId}`)
      .then((res) => cb(res.data));
    // .then((res) => console.log('res ======= ', res.data));
    // .catch((err) => cb(err));
    // .throw(err);
  },
  // getQuestions(productId, cb) {
  //   axios.get(`http://52.26.193.201:3000/qa/${productId}`)
  //     // .then((res) => console.log(res.data));
  //     .then((res) => cb(res.data))
  //     .catch((err) => cb(err));
  // },
  getAnswers(questionId, cb) {
    axios.get(`http://52.26.193.201:3000/qa/${questionId}/answers`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // Post
  postQuestion(productId, cb) {
    axios.post(`http://52.26.193.201:3000/qa/${productId}`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  postAnswer(questionId, cb) {
    axios.post(`http://52.26.193.201:3000/qa/${questionId}/answers`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // review Question
  // PUT / qa / question /: question_id / helpful
  markQuestionHelpful(questionId, cb) {
    axios.put(`http://52.26.193.201:3000/qa/question/${questionId}/helpful`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  reportQuestion(questionId, cb) {
    axios.put(`http://52.26.193.201:3000/qa/question/${questionId}/report`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // review Answer
  // PUT / qa / answer /: question_id / helpful
  markAnswerHelpful(answerId, cb) {
    axios.put(`http://52.26.193.201:3000/qa/answer/${answerId}/helpful`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  reportAnswer(answerId, cb) {
    axios.put(`http://52.26.193.201:3000/qa/answer/${answerId}/report`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  // ========== Reviews ============
  // GET /reviews/:product_id/list
  getReviews(productId, cb) {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/list`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  getReviewMeta(productId, cb) {
    axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  postReview(productId, cb) {
    axios.post(`http://52.26.193.201:3000/reviews/${productId}`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  markReviewHelpful(reviewId, cb) {
    axios.put(`http://52.26.193.201:3000/reviews/helpful/${reviewId}`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
  reportReview(reviewId, cb) {
    axios.put(`http://52.26.193.201:3000/reviews/report/${reviewId}`)
      // .then((res) => console.log(res.data));
      .then((res) => cb(res.data))
      .catch((err) => cb(err));
  },
};

export default helperAPI;
