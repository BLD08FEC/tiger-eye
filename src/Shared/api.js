// API location: http://3.134.102.30/
// The different data services for this api are
    // Cart
    // Interactions
    // Products
    // Questions & Answers
    // Reviews

    
// ======== Cart API =====================

// get   = /cart/:user_token

// post = /cart/

// ======== Interactions API ==============

// post = /interactions/


// ======== Products =====================    
// GET / products / list
const getProducts = (productId, cb) => {
    axios.get('http://3.134.102.30/products/list')
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}    

const getProduct = (productId, cb) => {
    axios.get(`http://3.134.102.30/products/${productId}`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}    

const getProductStyle = (productId, cb) => {
    axios.get(`http://3.134.102.30/products/${productId}/styles`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}    


// ======== Related Products ==============

const getRelatedProduct = (productId, cb) => {
    axios.get(`http://3.134.102.30/products/${productId}/related`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
    // .catch(err => cb(error))
}


// ======== Question and Answers ==========

// Get 
const getQuestions = (productId, cb) => {
    axios.get(`http://3.134.102.30/qa/${productId}`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

const getAnswers = (questionId, cb) => {
    axios.get(`http://3.134.102.30/qa/${questionId}/answers`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

// Post
const postQuestion = (productId, cb) => {
    axios.post(`http://3.134.102.30/qa/${productId}`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

const postAnswer = (questionId, cb) => {
    axios.post(`http://3.134.102.30/qa/${questionId}/answers`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

// review Question 
// PUT / qa / question /: question_id / helpful

const markQuestionHelpful = (questionId, cb) => {
    axios.put(`http://3.134.102.30/qa/question/${questionId}/helpful`)
    .then(res => console.log(res.data))
}

const reportQuestion = (questionId, cb) => {
    axios.put(`http://3.134.102.30/qa/question/${questionId}/report`)
    .then(res => console.log(res.data))
}

// review Answer 
// PUT / qa / answer /: question_id / helpful

const markAnswerHelpful = (questionId, cb) => {
    axios.put(`http://3.134.102.30/qa/answer/${questionId}/helpful`)
    .then(res => console.log(res.data))
}

const reportAnswer = (questionId, cb) => {
    axios.put(`http://3.134.102.30/qa/answer/${questionId}/report`)
    .then(res => console.log(res.data))
}

// =========== Reviews ============

module.exports(
    getProducts,
    getProduct,
    getProductStyle,
    getRelatedProduct,
    getQuestions,
    getAnswers,
    postQuestion,
    postAnswer,
    


)