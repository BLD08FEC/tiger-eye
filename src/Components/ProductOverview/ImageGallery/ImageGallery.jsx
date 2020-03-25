/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageGallery.scss';

export class ImageGallery extends Component {
  constructor(props) {
      super(props);
      this.state={};
  }

  render() {
    const { selectedStylePhotos, selectedStyleName } = this.props;

    return (
      <div>
        <div>
            {selectedStylePhotos.length > 0
            && <img 
                src={selectedStylePhotos[0].url}
                className="main-image"
                alt={selectedStyleName}
                />
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    productStyles: state.productDataReducer.productStyles,
    selectedStylePhotos: state.productDataReducer.selectedStylePhotos,
    selectedStyleName: state.productDataReducer.selectedStyleName
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
