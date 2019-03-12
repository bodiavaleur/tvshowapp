import {
  POPULAR,
  AIRING_TODAY,
  ON_THE_AIR,
  TOP_RATED,
  SEARCH
} from '../actions';

const initialState = {
  popular: [],
  airingToday: [],
  onTheAir: [],
  topRated: [],
  selected: [],
  search: []
};

// FIXME: refactor

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POPULAR:
      return { ...state, popular: payload };

    case AIRING_TODAY:
      return { ...state, airingToday: payload };

    case ON_THE_AIR:
      return { ...state, onTheAir: payload };

    case TOP_RATED:
      return { ...state, topRated: payload };

    case SEARCH:
      return { ...state, search: payload };

    default:
      return state;
  }
};
