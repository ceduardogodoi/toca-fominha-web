import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Player } from '../../models/Player';

export const fetchAllPlayers = createAsyncThunk('users/fetchAll', async (): Promise<Player[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Player 1',
        },
        {
          name: 'Player 2',
        }
      ])
      // reject()
    }, 1000)
  })
})

interface State {
  players: Player[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: State = {
  players: [],
  loading: 'idle',
}

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer(state, { payload }: PayloadAction<Player>) {
      state.players.push(payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPlayers.pending, state => {
      state.loading = 'pending'
    })
    builder.addCase(fetchAllPlayers.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.players = action.payload
    })
    builder.addCase(fetchAllPlayers.rejected, (state, action) => {
      state.loading = 'failed'
    })
  },
})

export const { addPlayer } = playerSlice.actions

export default playerSlice.reducer
