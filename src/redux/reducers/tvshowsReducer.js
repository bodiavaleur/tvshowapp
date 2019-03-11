import {
  GET_MOST_POPULAR,
  GET_AIRING_TODAY,
  GET_ON_THE_AIR,
  GET_TOP_RATED,
  SET_SELECTED_SHOW
} from '../actions';

const initialState = {
  mostPopularData: [],
  airingTodayData: [],
  onTheAirData: [],
  topRatedData: [],
  selectedShow: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOST_POPULAR:
      return { ...state, mostPopularData: payload };

    case GET_AIRING_TODAY:
      return { ...state, airingTodayData: payload };

    case GET_ON_THE_AIR:
      return { ...state, onTheAirData: payload };

    case GET_TOP_RATED:
      return { ...state, topRatedData: payload };

    case SET_SELECTED_SHOW:
      return { ...state, selectedShow: payload };

    default:
      return state;
  }
};
