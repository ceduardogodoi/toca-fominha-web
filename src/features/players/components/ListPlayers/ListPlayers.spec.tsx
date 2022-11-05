import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../../testUtils'
import { ListPlayers } from '.'

import type { Player } from '../../../../models/Player'

describe('ListPlayers component', () => {
  it('should have a message saying that there are no players registered', () => {
    renderWithProviders(<ListPlayers />)

    const message = screen.getByText('Não há jogadores registrados.')
    expect(message).toBeInTheDocument()
  })

  it('should count the players being shown', () => {
    const players: Player[] = [
      {
        name: 'Carlos',
      },
      {
        name: 'Eduardo',
      }
    ]

    renderWithProviders(<ListPlayers />, {
      preloadedState: {
        players,
      }
    })

    const list = screen.getByRole<HTMLUListElement>('list')
    expect(list.childNodes).toHaveLength(players.length)
  })
})
