import React from 'react';
import './App.css';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/QuestionsAndAnswers';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <header className="App-header">App</header>
      <div className="components-area">
        <div className="row"><ProductOverview /></div>
        <div className="row"><QuestionsAndAnswers /></div>
        <div className="row"><RelatedProducts /></div>
        <div className="row"><Reviews /></div>
      </div>
    </div>
  );
}

export default App;
