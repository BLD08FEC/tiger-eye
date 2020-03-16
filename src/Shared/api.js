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
}


// ======== Question and Answers ==========
// get Q's from Product_id
const getQuestions = (productId, cb) => {
    axios.get(`http://3.134.102.30/qa/${productId}`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

// get answers from Question_id
const getAnswers = (questionId, cb) => {
    axios.get(`http://3.134.102.30/qa/${questionId}/answers`)
    .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

const giveAnswer = (productId, cb) => {
    axios.post(`http://3.134.102.30/qa/${productId}`)
        .then(console.log(res.data))
    // .then(res.data => cb(res.data))
}

// /qa/: question_id / answers

// const getOneProduct = (productId, cb) => {
//     axios(`http://3.134.102.30/products/{productId}`)
//         .then(console.log(res.data))
//     // .then(res.data => cb(res.data))
// }
// // add a question
// / qa /: product_id