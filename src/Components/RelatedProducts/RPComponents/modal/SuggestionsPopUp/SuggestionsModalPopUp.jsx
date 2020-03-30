import React from 'react';
import './SuggestionsModalPopUp.scss';

const SuggestionsModalPopUp = ({ handleChangeVisibility, show, children }) => {
  const showHideClassName = show ? 'rp-modal-suggestions rp-modal-suggestions-show' : 'rp-modal-suggestions rp-modal-suggestions-hide';

  return (
    <div className={showHideClassName}>
      <div className="rp-modal-suggestions-pop-up-main">
        <div className="row">
          {children}
        </div>
        <div
          className="rp-modal-suggestions-pop-up-button"
          onClick={handleChangeVisibility}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          CLOSE
        </div>
      </div>
    </div>
  );
};

export default SuggestionsModalPopUp;
