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
    const { carouselType } = this.props;
    const { showSuggestionsModal, showMyOutfitModal } = this.state;
    let newVisibility;

    if (carouselType === 'suggestions') {
      newVisibility = !showSuggestionsModal;
      this.setState({ showSuggestionsModal: newVisibility });
    }

    if (carouselType === 'myOutfit') {
      newVisibility = !showMyOutfitModal;
      this.setState({ showMyOutfitModal: newVisibility });
    }
  }

  confirmedDeletionFromMyOutfit = () => {
    const { handleDelete } = this.props;
    this.changeModalVisibility();
    handleDelete();
  }

  render() {
    const {
      mainProductId, cardProductId, carouselType, carouselIndex, buttonType, handleDelete,
    } = this.props;
    const { showSuggestionsModal, showMyOutfitModal } = this.state;

    return (
      <div className="modal-dashboard">
        <SuggestionsModalPopUp
          show={showSuggestionsModal}
          handleChangeVisibility={this.changeModalVisibility}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-6">
                <ModalComparisonCard
                  // key={i}
                  mainProductId={mainProductId}
                  cardProductId={mainProductId}
                  carouselType={carouselType}
                  carouselIndex={carouselIndex}
                  buttonType={buttonType}
                />
              </div>
              <div className="col-xs-6">
                <ModalComparisonCard
                  // key={i}
                  mainProductId={mainProductId}
                  cardProductId={cardProductId}
                  carouselType={carouselType}
                  carouselIndex={carouselIndex}
                  buttonType={buttonType}
                />
              </div>
            </div>
          </div>
        </SuggestionsModalPopUp>
        {/* <div className="container-fluid"> */}
        <MyOutfitModalPopUp
          className="rp-modal-my-outfit-are-you-sure-delete-text"
          show={showMyOutfitModal}
          handleConfirmVisibility={this.confirmedDeletionFromMyOutfit}
          handleCancelVisibility={this.changeModalVisibility}
        >
          <div className="rp-modal-my-outfit-are-you-sure-delete-text">
            Are you sure you want to remove this from Your Outfit?
          </div>
        </MyOutfitModalPopUp>
        {/* </div> */}
        <div
          className="rp-modal-show-button"
          onClick={this.changeModalVisibility}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          {buttonType}
        </div>
      </div>
    );
  }
}

export default ModalDashboard;
