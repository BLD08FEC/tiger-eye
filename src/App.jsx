import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/QuestionsAndAnswers';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts';
import Reviews from './Components/Reviews/Reviews';

function App(props) {
  // console.log('props: ', props.location.pathname);
  return (
    <div className="App">
      <div className="container">
        <div className="header">Header</div>
        <div className="row"><ProductOverview /></div>
        <div className="row"><RelatedProducts /></div>
        <div className="row"><QuestionsAndAnswers /></div>
        <div className="row"><Reviews /></div>
      </div>
    </div>
  );
}

export default withRouter(App);
