import React from 'react';
// import { connect } from 'react-redux';
import './RelatedProducts.scss';
import Carousel from './RPComponents/Carousel/Carousel';
import ModalDashboard from './RPComponents/modal/ModalDashboard/ModalDashboard';

const RelatedProducts = () => (
  <div className="container-fluid related-products-main">
    <div className="row carousel-title"><em>You might also like...</em></div>
    <Carousel className="row related-products-carousel-parent" />
    <div className="row carousel-title"><em>Build your own outfit.</em></div>
    <Carousel className="row my-outfit-carousel-parent" />
    <ModalDashboard className="row modal-dashboard-parent" />
  </div>
);

export default RelatedProducts;


// const RelatedProducts = () => {
// class RelatedProducts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render() {
//     return (
//       <div className="container-fluid related-products-main">
//         <div className="row carousel-title"><em>You might also like...</em></div>
//         <Carousel className="row related-products-carousel-parent" />
//         <div className="row carousel-title"><em>Build your own outfit.</em></div>
//         <Carousel className="row my-outfit-carousel-parent" />
//         <ModalDashboard className="row modal-dashboard-parent" />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   productData: state.productDataReducer.productData,
//   productStyles: state.productDataReducer.productStyles,
//   reviewMetaData: state.reviewMetaReducer.reviewMetaData,
//   salePrice: state.productDataReducer.salePrice,
//   selectedStyle_id: state.productDataReducer.selectedStyle_id,
//   selectedStyleName: state.productDataReducer.selectedStyleName,
//   selectedPrice: state.productDataReducer.selectedPrice,
//   productUrl: state.productDataReducer.productStyles.results,
// });

// export default connect(mapStateToProps)(RelatedProducts);
