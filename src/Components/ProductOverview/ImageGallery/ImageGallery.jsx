/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageGallery.scss';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      thumbnailIndex: 0,
    };
    this.resetSelectedIndex = this.resetSelectedIndex.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.scrollPrevious = this.scrollPrevious.bind(this);
    this.scrollNext = this.scrollNext.bind(this);
  }

  resetSelectedIndex() {
    this.setState({ selectedIndex: 0 });
  }

  thumbnailClick(e, index) {
    e.preventDefault();
    this.setState({ selectedIndex: index });
  }

  scrollPrevious() {
    const { selectedStylePhotos } = this.props;
    const { selectedIndex, thumbnailIndex } = this.state;

    if (thumbnailIndex > 0) {
      this.setState({ thumbnailIndex: thumbnailIndex - 1 });
    }
  }

  scrollNext() {
    const { selectedStylePhotos } = this.props;
    const { selectedIndex, thumbnailIndex } = this.state;

    if (thumbnailIndex < selectedStylePhotos.length - 7) {
      this.setState({ thumbnailIndex: thumbnailIndex + 1 });
    }
  }

  renderThumbnails() {
    const { selectedStylePhotos, selectedStyleName } = this.props;
    const { selectedIndex, thumbnailIndex } = this.state;
    const thumbnails = [];
    const endpoint = thumbnailIndex + 6;

    for (let i = thumbnailIndex; i <= endpoint; i++) {
      if (i === selectedStylePhotos.length) {
        break;
      }

      i === selectedIndex
        ? thumbnails.push(
          <div key={i}>
            <img
              src={selectedStylePhotos[i].thumbnail_url}
              className="thumbnail selected"
              alt={selectedStyleName}
              onClick={(e) => this.thumbnailClick(e, i)}
            />
          </div>
        )
        : thumbnails.push(
          <div key={i}>
            <img
              src={selectedStylePhotos[i].thumbnail_url}
              className="thumbnail"
              alt={selectedStyleName}
              onClick={(e) => this.thumbnailClick(e, i)}
            />
          </div>
        );
    }
    return thumbnails;
  }

  render() {
    const { selectedStylePhotos, selectedStyleName } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div>
        {selectedStylePhotos.length > 0
            && (
            <div>
              {(selectedIndex > selectedStylePhotos.length - 1)
                ? this.resetSelectedIndex()
                : (
                  <div>
                    <div className="thumbnail-list">
                      <div className="thumbnail-margin">
                        <div onClick={() => this.scrollPrevious()} className="arrow arrow-up">&#x219F;</div>
                        {this.renderThumbnails()}
                        <div onClick={() => this.scrollNext()} className="arrow arrow-down">&#x21A1;</div>
                      </div>
                    </div>
                    <img
                      src={selectedStylePhotos[selectedIndex].url}
                      className="main-image"
                      alt={selectedStyleName}
                    />
                  </div>
                )}
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
