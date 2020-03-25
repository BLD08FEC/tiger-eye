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
      showModal: false,
    };
    this.resetSelectedIndex = this.resetSelectedIndex.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.scrollPrevious = this.scrollPrevious.bind(this);
    this.scrollNext = this.scrollNext.bind(this);
    this.showNextOrPrevious = this.showNextOrPrevious.bind(this);
    this.showExpanded = this.showExpanded.bind(this);
    this.hideExpanded = this.hideExpanded.bind(this);
  }

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

    if (e.target.id === 'next' && selectedIndex < selectedStylePhotos.length-1) {
        this.setState({ selectedIndex: selectedIndex + 1 });
        this.scrollNext();
    } else if (e.target.id === 'previous' && selectedIndex > 0) {
        this.setState({ selectedIndex: selectedIndex - 1 });
        this.scrollPrevious();
    }
  }

  showExpanded = () => {
    this.setState({ showModal: true });
  };

  hideExpanded = () => {
    this.setState({ showModal: false });
  };


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
    const { selectedIndex, showModal } = this.state;

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
                    <div className="arrow-right">
                        {selectedIndex !== selectedStylePhotos.length-1 && 
                        <div id="next" className="main-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                           &#x2905;
                        </div>
                        } 
                    </div>
                    <div className="arrow-left">
                      {selectedIndex !== 0 && 
                        <div id="previous" className="main-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                          &#x2905;
                        </div>
                      } 
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
            {showModal === true &&
            <div className="modal1">
                <div className="modal-main1">
                    <div className="close-modal" onClick={() => this.hideExpanded()}>X</div>
                    <div className="arrow-right">
                        {selectedIndex !== selectedStylePhotos.length-1 && 
                        <div id="next" className="modal-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                        &#x2905;
                        </div>
                        } 
                    </div>
                    <div className="arrow-left">
                    {selectedIndex !== 0 && 
                        <div id="previous" className="modal-arrow" onClick={(e) => this.showNextOrPrevious(e)}>
                        &#x2905;
                        </div>
                    } 
                    </div>
                    <img
                    src={selectedStylePhotos[selectedIndex].url}
                    className="modal-image"
                    alt={selectedStyleName}
                    onClick={() => this.showExpanded()}
                    />
                </div>
            </div>
            }
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
