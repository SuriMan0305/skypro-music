import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from './slices/playerActions'

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  }
})