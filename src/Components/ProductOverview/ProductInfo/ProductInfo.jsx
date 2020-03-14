import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from './Stars';

export class ProductInfo extends Component {
  constructor(props) {
      super(props);
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        Product Info
        <Stars />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
