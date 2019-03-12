import {
  POPULAR,
  ON_THE_AIR,
  TOP_RATED,
  AIRING_TODAY,
  SEARCH
} from './actions';

// FIXME: refactor

export const getPopular = payload => ({
  type: POPULAR,
  payload
});

export const airingToday = payload => ({
  type: AIRING_TODAY,
  payload
});

export const onTheAir = payload => ({
  type: ON_THE_AIR,
  payload
});

export const topRated = payload => ({
  type: TOP_RATED,
  payload
});

export const searchData = payload => ({
  type: SEARCH,
  payload
});
