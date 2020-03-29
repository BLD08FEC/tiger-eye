/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ModalDashboard.scss';
import CompareModalPopUp from '../SuggestionsPopUp/SuggestionsModalPopUp';
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
        <CompareModalPopUp show={this.state.showSuggestionsModal} handleChangeVisibility={this.changeModalVisibility}>
          <p>MODAL</p>
          <p>DATA AND STUFF</p>
        </CompareModalPopUp>
        <MyOutfitModalPopUp
          className="are-you-sure-text"
          show={this.state.showMyOutfitModal}
          handleConfirmVisibility={this.confirmedDeletionFromMyOutfit}
          handleCancelVisibility={this.changeModalVisibility}
        >
          Are you sure you want to remove this from Your Outfit?
        </MyOutfitModalPopUp>
        <div className="modal-show-button" onClick={this.changeModalVisibility}>{this.props.buttonType}</div>
      </div>
    );
  }
}

export default ModalDashboard;
