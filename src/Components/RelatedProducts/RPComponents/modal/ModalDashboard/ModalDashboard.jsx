/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ModalDashboard.scss';
import ModalComparisonCard from '../ModalComparisonCard/ModalComparisonCard';
import SuggestionsModalPopUp from '../SuggestionsPopUp/SuggestionsModalPopUp';
import MyOutfitModalPopUp from '../MyOutfitModalPupUp/MyOutfitModalPopUp';

class ModalDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestionsModal: false,
      showMyOutfitModal: false,
    };
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
    this.confirmedDeletionFromMyOutfit = this.confirmedDeletionFromMyOutfit.bind(this);
  }

  changeModalVisibility = () => {
    let newVisibility;

    if (this.props.carouselType === 'suggestions') {
      newVisibility = !this.state.showSuggestionsModal;
      this.setState({ showSuggestionsModal: newVisibility });
    }

    if (this.props.carouselType === 'myOutfit') {
      newVisibility = !this.state.showMyOutfitModal;
      this.setState({ showMyOutfitModal: newVisibility });
    }
  }

  confirmedDeletionFromMyOutfit = () => {
    this.changeModalVisibility();
    this.props.handleDelete();
  }

  render() {
    return (
      <div className="modal-dashboard">
        <SuggestionsModalPopUp
          show={this.state.showSuggestionsModal}
          handleChangeVisibility={this.changeModalVisibility}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-6">
                <ModalComparisonCard
                  // key={i}
                  mainProductId={this.props.mainProductId}
                  cardProductId={this.props.mainProductId}
                  carouselType={this.props.carouselType}
                  carouselIndex={this.props.carouselIndex}
                  buttonType={this.props.buttonType}
                />
              </div>
              <div className="col-xs-6">
                <ModalComparisonCard
                  // key={i}
                  mainProductId={this.props.mainProductId}
                  cardProductId={this.props.cardProductId}
                  carouselType={this.props.carouselType}
                  carouselIndex={this.props.carouselIndex}
                  buttonType={this.props.buttonType}
                />
              </div>
            </div>
          </div>
        </SuggestionsModalPopUp>
        {/* <div className="container-fluid"> */}
        <MyOutfitModalPopUp
          className="rp-modal-my-outfit-are-you-sure-delete-text"
          show={this.state.showMyOutfitModal}
          handleConfirmVisibility={this.confirmedDeletionFromMyOutfit}
          handleCancelVisibility={this.changeModalVisibility}
        >
          <div className="rp-modal-my-outfit-are-you-sure-delete-text">
            Are you sure you want to remove this from Your Outfit?
          </div>
        </MyOutfitModalPopUp>
        {/* </div> */}
        <div className="rp-modal-show-button" onClick={this.changeModalVisibility}>{this.props.buttonType}</div>
      </div>
    );
  }
}

export default ModalDashboard;
