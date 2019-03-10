import { GET_MOST_POPULAR } from '../actions';

const initialState = {
  mostPopularData: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOST_POPULAR:
      return { ...state, mostPopularData: payload };

    default:
      return state;
  }
};
