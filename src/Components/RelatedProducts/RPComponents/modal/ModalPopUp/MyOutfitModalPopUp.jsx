/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './CompareModalPopUp.scss';

const MyOutfitModalPopUp = ({ handleChangeVisibility, show, children }) => {
  const showHideClassName = show ? 'modal show' : 'modal hide';

  return (
    <div className={showHideClassName}>
      <div className="modal-pop-up-main">
        {children}
        <div className="modal-pop-up-button" onClick={handleChangeVisibility}>Confirm</div>
        <div className="modal-pop-up-button" onClick={handleChangeVisibility}>Cancel</div>
      </div>
    </div>
  );
};

export default MyOutfitModalPopUp;
