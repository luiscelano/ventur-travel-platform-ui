import * as actionTypes from './actionTypes'

export const setCurrentTab = (tab) => ({
  type: actionTypes.navigation_set_tab,
  payload: tab
})
