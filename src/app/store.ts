import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import playersSlice from '../features/players/playersSlice'

const rootReducer = combineReducers({
  players: playersSlice
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']