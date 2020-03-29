/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './MyOutfitModalPopUp.scss';

const MyOutfitModalPopUp = ({
  handleConfirmVisibility, handleCancelVisibility, show, children,
}) => {
  const showHideClassName = show ? 'modal show' : 'modal hide';

  return (
    <div className={showHideClassName}>
      <div className="my-outfit-modal-pop-up-main">
        {children}
        <div className="row cancel-confirm">
          <div className="my-outfit-modal-pop-up-button" onClick={handleConfirmVisibility}>Confirm</div>
          <div className="my-outfit-modal-pop-up-button" onClick={handleCancelVisibility}>Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default MyOutfitModalPopUp;
