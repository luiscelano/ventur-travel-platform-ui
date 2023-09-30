import { createAction, createReducer } from '@reduxjs/toolkit'
import * as actionTypes from './actionTypes'

const navigationSetTab = createAction(actionTypes.navigation_set_tab)

const initialState = { currentTab: 1 }

const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(navigationSetTab, (state, action) => {
    state.currentTab = action.payload
  })
})

export default uiReducer
