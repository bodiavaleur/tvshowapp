import { TOGGLE_TOP_MENU, TOGGLE_DETAILS } from './uiActions';

export const toggleTopMenu = payload => ({
  type: TOGGLE_TOP_MENU,
  payload
});

export const toggleDetails = payload => ({
  type: TOGGLE_DETAILS,
  payload
});
