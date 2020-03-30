/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './MyOutfitModalPopUp.scss';

const MyOutfitModalPopUp = ({
  handleConfirmVisibility, handleCancelVisibility, show, children,
}) => {
  const showHideClassName = show ? 'rp-modal-my-outfit rp-modal-my-outfit-show' : 'rp-modal-my-outfit rp-modal-my-outfit-hide';

  return (
    <div className={showHideClassName}>
      <div className="rp-modal-my-outfit-pop-up-main">
        {children}
        <div className="row rp-modal-my-outfit-cancel-confirm">
          <div
            className="rp-modal-my-outfit-pop-up-button"
            onClick={handleConfirmVisibility}
          >
            Confirm
          </div>
          <div
            className="rp-modal-my-outfit-pop-up-button"
            onClick={handleCancelVisibility}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOutfitModalPopUp;
