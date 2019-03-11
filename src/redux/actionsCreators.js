import {
  GET_MOST_POPULAR,
  GET_ON_THE_AIR,
  GET_TOP_RATED,
  GET_AIRING_TODAY,
  SET_SELECTED_SHOW
} from './actions';

// FIXME: refactor

export const getMostPopular = payload => ({
  type: GET_MOST_POPULAR,
  payload
});

export const getAiringToday = payload => ({
  type: GET_AIRING_TODAY,
  payload
});

export const getOnTheAir = payload => ({
  type: GET_ON_THE_AIR,
  payload
});

export const getTopRated = payload => ({
  type: GET_TOP_RATED,
  payload
});

export const setSelected = payload => ({
  type: SET_SELECTED_SHOW,
  payload
});
