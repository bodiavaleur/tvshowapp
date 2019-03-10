import { TOGGLE_TOP_MENU } from '../uiActions';

const initialState = {
  isTopMenuOpen: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_TOP_MENU:
      return { ...state, isTopMenuOpen: payload };

    default:
      return state;
  }
};
