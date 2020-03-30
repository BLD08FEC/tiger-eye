// import React, { Component } from 'react';
// import './Carousel.scss';
// // import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// // import {
// //   RPincrement, /* RPincrementReset, */ RPdecrement, /* RPdecrementReset, */
// // } from '../../../../data/actions/relatedProductsAction';
// import ProductCard from '../ProductCard/ProductCard';
// // import helperAPI from '../../../../Shared/api';

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       carouselIndex: 0,
//       relatedArr: [],
//     };
//     this.next = this.next.bind(this);
//   }

//   // async componentDidMount() {
//   //   const { mainProductId } = this.props;
//   //   // await this.setState({ mainProductId: this.props.productData.id })

//   //   const callForRelatedArray = async () => {
//   //     await helperAPI.getRelatedProduct(mainProductId, (data) => {
//   //       this.setState({ relatedArr: data.results });
//   //     });
//   //     callForRelatedArray();
//   //   };
//   // }

//   componentDidMount() {
//     const { mainProductId } = this.props;
//     // eslint-disable-next-line no-undef
//     fetch(`http://52.26.193.201:3000/products/${mainProductId}/related`)
//       .then((res) => res.json())
//       .then((data) => this.setState({ relatedArr: data }))
//       .catch((err) => err);
//   }

//   next(direction) {
//     const { carouselIndex, relatedArr } = this.state;
//     let changeToCard = carouselIndex;
//     const max = relatedArr.length;

//     if (direction === 'left') {
//       changeToCard -= 1;
//       // this.setState((changeToCard) => ({ carouselIndex: changeToCard.carouselIndex - 1 }));
//     }
//     if (direction === 'right') {
//       changeToCard += 1;
//       // this.setState((changeToCard) => ({ carouselIndex: changeToCard.carouselIndex + 1 }));
//     }
//     if (carouselIndex > max - 4) { // alter this to be dynamic based on number of related products
//       changeToCard = 0;
//       // this.setState(() => ({ carouselIndex: 0 }));
//     }
//     if (carouselIndex < 0) { // alter this to be dynamic based on number of related products
//       changeToCard = max - 4;
//       // this.setState(() => ({ carouselIndex: relatedArr.length - 4 }));
//     }
//     this.setState({ carouselIndex: changeToCard });
//     // this.setState((changeToCard) => ({ carouselIndex: changeToCard }));
//   }

//   render = () => {
//     const { mainProductId } = this.props;
//     const { carouselIndex, relatedArr } = this.state;
//     let cardDeck = relatedArr.slice();
//     // let showHand = cardDeck;

//     if (cardDeck.length < 4) {
//       for (let i = cardDeck.length; i <= 4; i += 1) {
//         cardDeck.push(0);
//         // showHand.push(0);
//       }
//     }
//     if (cardDeck.length > 4) {
//       cardDeck = cardDeck.slice(carouselIndex, carouselIndex + 4);
//       // showHand = cardDeck.slice(this.state.carouselIndex, this.state.carouselIndex + 4);
//     }

//     return (
//       <div className="container-fluid rp-carousel-main">
//         <div className="row">
//           <div
//             className="col-xs-1 col-sm-1 rp-carousel-arrow"
//             onClick={() => this.next('left')}
//             onKeyPress={() => {}}
//             role="button"
//             tabIndex={0}
//           >
//             <div>&#9664;</div>
//           </div>
//           <div className="col-xs-10">

//             <div className="container-fluid">
//               <div className="row">
//                 {cardDeck.map((i, id) => (
//                   <div className="col-xs-3">
//                     <ProductCard
//                       // eslint-disable-next-line no-sequences
//                       key={i}
//                       mainProductId={mainProductId}
//                       cardProductId={cardDeck[id]}
//                       carouselType="suggestions"
//                       carouselIndex={i}
//                       buttonType="+"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//           <div
//             className="col-xs-1 col-sm-1 rp-carousel-arrow"
//             onClick={() => this.next('right')}
//             onKeyPress={() => {}}
//             role="button"
//             tabIndex={0}
//           >
//             <div>&#9654;</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;


// ======================================== ORIGINAL CODE ============================================

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       carouselIndex: 0,
//       relatedArr: [],
//     };
//     this.next = this.next.bind(this);
//   }

//   componentDidMount() {
//     // eslint-disable-next-line no-undef
//     fetch(`http://52.26.193.201:3000/products/${this.props.mainProductId}/related`)
//       .then((res) => res.json())
//       .then((data) => this.setState({ relatedArr: data }))
//       .catch((err) => err);
//   }

//   next(direction) {
//     let changeToCard = this.state.carouselIndex;
//     const max = this.state.relatedArr.length;

//     if (direction === 'left') {
//       changeToCard -= 1;
//     }
//     if (direction === 'right') {
//       changeToCard += 1;
//     }
//     if (changeToCard > max - 4) { // alter this to be dynamic based on number of related products
//       changeToCard = 0;
//     }
//     if (changeToCard < 0) { // alter this to be dynamic based on number of related products
//       changeToCard = max - 4;
//     }

//     this.setState({ carouselIndex: changeToCard });
//   }

//   render = () => {
//     const cardDeck = this.state.relatedArr.slice();
//     let showHand = cardDeck;

//     if (cardDeck.length < 4) {
//       for (let i = cardDeck.length; i <= 4; i += 1) {
//         showHand.push(0);
//       }
//     }
//     if (cardDeck.length > 4) {
//       showHand = cardDeck.slice(this.state.carouselIndex, this.state.carouselIndex + 4);
//     }

//     return (
//       <div className="container-fluid rp-carousel-main">
//         <div className="row">
//           <div
//             className="col-xs-1 col-sm-1 rp-carousel-arrow"
//             onClick={() => this.next('left')}
//             onKeyPress={() => {}}
//             role="button"
//             tabIndex={0}
//           >
//             <div>&#9664;</div>
//           </div>
//           <div className="col-xs-10">

//             <div className="container-fluid">
//               <div className="row">
//                 {showHand.map((i, id) => (
//                   <div className="col-xs-3">
//                     <ProductCard
//                       // eslint-disable-next-line no-sequences
//                       key={i, id}
//                       mainProductId={this.props.mainProductId}
//                       cardProductId={showHand[id]}
//                       carouselType="suggestions"
//                       carouselIndex={i}
//                       buttonType="+"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//           <div
//             className="col-xs-1 col-sm-1 rp-carousel-arrow"
//             onClick={() => this.next('right')}
//             onKeyPress={() => {}}
//             role="button"
//             tabIndex={0}
//           >
//             <div>&#9654;</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;
