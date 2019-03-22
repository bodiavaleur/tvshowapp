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
  console.log('payload', payload);
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
      const value = payload ? payload : [];
      return { ...state, search: value };

    default:
      return state;
  }
};
