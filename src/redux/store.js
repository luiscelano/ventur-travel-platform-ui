import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/reducer'
import uiReducer from './ui/reducer'
const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      ui: uiReducer
    },
    preloadedState
  })
}

export default setupStore
