/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './SuggestionsModalPopUp.scss';

const CompareModalPopUp = ({ handleChangeVisibility, show, children }) => {
  const showHideClassName = show ? 'rp-modal-suggestions rp-modal-suggestions-show' : 'rp-modal-suggestions rp-modal-suggestions-hide';

  return (
    <div className={showHideClassName}>
      <div className="rp-modal-suggestions-pop-up-main">
        {children}
        <div className="rp-modal-suggestions-pop-up-button" onClick={handleChangeVisibility}>CLOSE</div>
      </div>
    </div>
  );
};

export default CompareModalPopUp;
