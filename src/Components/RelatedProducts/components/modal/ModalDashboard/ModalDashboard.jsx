/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ModalDashboard.scss';
import ModalPopUp from '../ModalPopUp/ModalPopUp';

class ModalDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRelatedProductsModal: false,
    };
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
  }

  changeModalVisibility = () => {
    const newVisibility = !this.state.showRelatedProductsModal;

    this.setState({ showRelatedProductsModal: newVisibility });
  }

  render() {
    return (
      <div className="modal-dashboard">
        <ModalPopUp show={this.state.showRelatedProductsModal} handleChangeVisibility={this.changeModalVisibility}>
          <p>MODAL</p>
          <p>DATA AND STUFF</p>
        </ModalPopUp>
        <div className="modal-show-button" onClick={this.changeModalVisibility}>CLICK HERE TO OPEN COMPARE MODAL</div>
      </div>
    );
  }
}

export default ModalDashboard;
