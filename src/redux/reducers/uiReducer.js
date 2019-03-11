import { TOGGLE_TOP_MENU, TOGGLE_DETAILS } from '../uiActions';

const initialState = {
  isTopMenuOpen: false,
  showDetails: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_TOP_MENU:
      return { ...state, isTopMenuOpen: !state.isTopMenuOpen };

    case TOGGLE_DETAILS:
      return { ...state, showDetails: !state.showDetails };

    default:
      return state;
  }
};
