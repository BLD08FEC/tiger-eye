import React from 'react';

import ProductCard from '../ProductCard/ProductCard';
import data from '../../dummyData';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      currentCard: 0,
    };
    this.next = this.next.bind(this);
  }

  next(direction) {
    let changeTo = this.state.currentCard;
    let maxx = this.state.data.length;

    if (direction === 'left') {
      changeTo -= 1;
      if (changeTo < 0) {
        changeTo = (maxx - 4);
      }
    }
    if (direction === 'right') {
      changeTo += 1;
      if (changeTo + 3 >= maxx) {
        changeTo = 0;
      }
    }
    this.setState({ currentCard: changeTo });
  }

  render() {
    return (
      <div className="row carousel-main">
        <div className="col-sm-2 carousel-arrow" direction="left" pointer="&#9654;" onClick={() => this.next('left')} ><div>&#9664;</div></div>
        <div className="col-sm-8 card-group">
          <div className="row">
            <ProductCard className="col-xs-3 carousel-card" data={data[this.state.currentCard]} />
            <ProductCard className="col-xs-3 carousel-card" data={data[this.state.currentCard + 1]} />
            <ProductCard className="col-xs-3 carousel-card" data={data[this.state.currentCard + 2]} />
            <ProductCard className="col-xs-3 carousel-card" data={data[this.state.currentCard + 3]} />
          </div>
          <div className="col-sm-2 carousel-arrow" direction="right" pointer="&#9664;" onClick={() => this.next('right')} >&#9654;</div>
        </div>
      </div>
    );
  }
}

export default Carousel;
