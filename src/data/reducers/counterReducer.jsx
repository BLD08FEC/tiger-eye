import { CHANGE_COUNT } from '../types/types';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        count: this.state.count + action.count,
      };
    default:
      return state;
  }
};

export default counterReducer;
