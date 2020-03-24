/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageGallery.scss';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.thumbnailClick = this.thumbnailClick.bind(this);
  }

  thumbnailClick(e, index) {
    e.preventDefault();
    this.setState({ selectedIndex: index });
  }

  render() {
    const { selectedStylePhotos, selectedStyleName } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div>
          {selectedStylePhotos.length > 0
            && (
            <div>
                <div className="thumbnail-list">
                    {selectedStylePhotos.map((thumbnail, index) => (
                        <div>
                        <img
                        src={thumbnail.thumbnail_url}
                        className="thumbnail"
                        key={index}
                        alt={selectedStyleName}
                        onClick={(e) => this.thumbnailClick(e, index)}
                        />
                        </div>
                    ))}
                </div>
                <img
                src={selectedStylePhotos[selectedIndex].url}
                className="main-image"
                alt={selectedStyleName}
                />
            </div>
            )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
  selectedStylePhotos: state.productDataReducer.selectedStylePhotos,
  selectedStyleName: state.productDataReducer.selectedStyleName,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
