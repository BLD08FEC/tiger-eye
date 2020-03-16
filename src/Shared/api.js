// API location: http://3.134.102.30/
// The different data services for this api are
    // Products
    // Reviews
    // Questions & Answers
    // Cart
    // Interactions

// ======== Products =====================
// get List of Products
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

// ======== Cart API =====================

// get

// post

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