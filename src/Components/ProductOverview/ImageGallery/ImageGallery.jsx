/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageGallery.scss';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      thumbnailIndex: 0,
      styleName: null,
    };
    this.checkStyleChange = this.checkStyleChange.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
  }

  checkStyleChange(selectedStyleName) {
    if (this.state.styleName !== selectedStyleName) {
      this.setState({
        selectedIndex: 0,
        styleName: selectedStyleName,
      });
    }
  }

  thumbnailClick(e, index) {
    e.preventDefault();
    this.setState({ selectedIndex: index });
  }

  renderThumbnails(selectedStylePhotos, thumbnailIndex, name) {
    const thumbnails = [];
    const endpoint = thumbnailIndex + 6;

    for (let i = thumbnailIndex; i <= endpoint; i++) {
      if (i === selectedStylePhotos.length) {
        break;
      }
      thumbnails.push(
        <div>
          <img
            src={selectedStylePhotos[i].thumbnail_url}
            className="thumbnail"
            key={i}
            alt={name}
            onClick={(e) => this.thumbnailClick(e, i)}
          />
        </div>,
      );
    }
    return thumbnails;
  }

  render() {
    const { selectedStylePhotos, selectedStyleName } = this.props;
    const { selectedIndex, thumbnailIndex } = this.state;

    this.checkStyleChange(selectedStyleName);

    return (
      <div>
        {selectedStylePhotos.length > 0
            && (
            <div>
              <div className="thumbnail-list">
                <div>up</div>
                {this.renderThumbnails(selectedStylePhotos, thumbnailIndex, selectedStyleName)}
                <div>down</div>
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
