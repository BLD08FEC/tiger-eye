/* eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Magnifier from 'react-magnifier';
import './ImageGallery.scss';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      thumbnailIndex: 0,
      showModal: false,
      showZoomed: false,
    };
    this.resetSelectedIndex = this.resetSelectedIndex.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.scrollPrevious = this.scrollPrevious.bind(this);
    this.scrollNext = this.scrollNext.bind(this);
    this.showNextOrPrevious = this.showNextOrPrevious.bind(this);
    this.showExpanded = this.showExpanded.bind(this);
    this.hideExpanded = this.hideExpanded.bind(this);
    this.showZoomed = this.showZoomed.bind(this);
    this.hideZoomed = this.hideZoomed.bind(this);
  }

  showExpanded = () => {
    this.setState({ showModal: true });
  };

  hideExpanded = () => {
    this.setState({ showModal: false });
  };

  showZoomed = () => {
    this.setState({ showZoomed: true });
  };

  hideZoomed = () => {
    this.setState({ showZoomed: false });
  };

  resetSelectedIndex() {
    this.setState({ selectedIndex: 0 });
  }

  thumbnailClick(e, index) {
    e.preventDefault();
    this.setState({ selectedIndex: index });
  }

  scrollNext() {
    const { selectedStylePhotos } = this.props;
    const { thumbnailIndex } = this.state;

    if (thumbnailIndex < selectedStylePhotos.length - 7) {
      this.setState({ thumbnailIndex: thumbnailIndex + 1 });
    }
  }

  scrollPrevious() {
    const { thumbnailIndex } = this.state;

    if (thumbnailIndex > 0) {
      this.setState({ thumbnailIndex: thumbnailIndex - 1 });
    }
  }

  showNextOrPrevious(e) {
    e.preventDefault();
    const { selectedStylePhotos } = this.props;
    const { selectedIndex } = this.state;

    if (e.target.id === 'next' && selectedIndex < selectedStylePhotos.length - 1) {
      this.setState({ selectedIndex: selectedIndex + 1 });
      this.scrollNext();
    } else if (e.target.id === 'previous' && selectedIndex > 0) {
      this.setState({ selectedIndex: selectedIndex - 1 });
      this.scrollPrevious();
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

      thumbnails.push(
        <div key={i}>
          <img
            src={selectedStylePhotos[i].thumbnail_url}
            className={i == selectedIndex ? ('thumbnail selected') : ('thumbnail')}
            alt={selectedStyleName}
            onClick={(e) => this.thumbnailClick(e, i)}
          />
        </div>,
      );
    }
    return thumbnails;
  }

  render() {
    const { selectedStylePhotos, selectedStyleName, selectedStyleSKUS } = this.props;
    const { selectedIndex, showModal, showZoomed } = this.state;

    return (
      <div>
        {selectedStyleSKUS.null === null 
        ? <div className="soldout-main-image">
            <div className="soldout">
                <div>OUT OF STOCK</div>
                <div>&#x2639;</div>
            </div>
          </div>
        : selectedStylePhotos.length > 0
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
                    <div className="arrow-right">
                      {selectedIndex !== selectedStylePhotos.length - 1
                        && (
                        <div id="next" className="main-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                          &#x2905;
                        </div>
                        )}
                    </div>
                    <div className="arrow-left">
                      {selectedIndex !== 0
                        && (
                        <div id="previous" className="main-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                          &#x2905;
                        </div>
                        )}
                    </div>
                    <img
                      src={selectedStylePhotos[selectedIndex].url}
                      className="main-image"
                      alt={selectedStyleName}
                      onClick={() => this.showExpanded()}
                    />
                  </div>
                )}
            </div>
            )}
        {showModal === true
            && (
            <div>
              <div className="modal1">
                <div className="modal-main1">
                  <div className="close-modal" onClick={() => this.hideExpanded()}>X</div>
                  <div className="arrow-right">
                    {selectedIndex !== selectedStylePhotos.length - 1
                            && (
                            <div id="next" className="modal-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                              &#x2905;
                            </div>
                            )}
                  </div>
                  <div className="arrow-left">
                    {selectedIndex !== 0
                            && (
                            <div id="previous" className="modal-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                              &#x2905;
                            </div>
                            )}
                  </div>
                  <img
                    src={selectedStylePhotos[selectedIndex].url}
                    className="modal-image"
                    alt={selectedStyleName}
                    onClick={() => this.showZoomed()}
                  />
                </div>
                {showZoomed === true && (
                  <div className="modal1">
                    <div className="modal-image modal-main1" onClick={() => this.hideZoomed()}>
                      <Magnifier
                        src={selectedStylePhotos[selectedIndex].url}
                        alt={selectedStyleName}
                        mgWidth={350}
                        mgHeight={350}
                        zoomFactor={1.3}
                      />
                    </div>
                  </div>
                )}
              </div>
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
  selectedStyleSKUS: state.productDataReducer.selectedStyleSKUS,
});

export default connect(mapStateToProps)(ImageGallery);
