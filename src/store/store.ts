import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export default store
