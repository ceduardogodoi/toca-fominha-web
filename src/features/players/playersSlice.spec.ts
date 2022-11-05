import { describe, it } from 'vitest'
import { Player } from '../../models/Player'
import reducer, { addPlayer } from './playersSlice'

describe('playerSlice', () => {
  const initialState: Player[] = []

  it('should return the initial state', () => {
    expect(reducer(initialState, { type: undefined })).toHaveLength(0)
  })

  it('should add a player', () => {
    const player: Player = { name: 'Carlos' }

    expect(reducer(initialState, addPlayer(player))).toHaveLength(1)
  })
})
