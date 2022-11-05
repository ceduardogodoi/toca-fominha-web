import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Player } from '../../models/Player';

const initialState: Player[] = []

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer(state, { payload }: PayloadAction<Player>) {
      state.push(payload);
    },
  }
})

export const { addPlayer } = playerSlice.actions

export default playerSlice.reducer
