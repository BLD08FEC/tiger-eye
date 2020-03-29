/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ModalDashboard.scss';
import CompareModalPopUp from '../ModalPopUp/CompareModalPopUp';
import MyOutfitModalPopUp from '../ModalPopUp/MyOutfitModalPopUp'

class ModalDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestedModal: false,
      showMyOutfitModal: false,
    };
    this.changeSuggestedModalVisibility = this.changeSuggestedModalVisibility.bind(this);
  }

  changeSuggestedModalVisibility = () => {
    let newVisibility;

    if (this.props.carouselType === 'suggestions') {
      newVisibility = !this.state.showSuggestedModal;
      this.setState({ showSuggestedModal: newVisibility });
    }

    if (this.props.carouselType === 'myOutfit') {
      newVisibility = !this.state.showMyOutfitModal;
      this.setState({ showMyOutfitModal: newVisibility });
    }
  }

  render() {
    return (
      <div className="modal-dashboard">
        <CompareModalPopUp show={this.state.showSuggestedModal} handleChangeVisibility={this.changeSuggestedModalVisibility}>
          <p>MODAL</p>
          <p>DATA AND STUFF</p>
        </CompareModalPopUp>
        <MyOutfitModalPopUp show={this.state.showMyOutfitModal} handleChangeVisibility={this.changeSuggestedModalVisibility}>
          <p>Are you sure that you want to remove this item from Your Outfit?</p>
        </MyOutfitModalPopUp>
        <div className="modal-show-button" onClick={this.changeSuggestedModalVisibility}>{this.props.buttonType}</div>
      </div>
    );
  }
}

export default ModalDashboard;
