import { ChangeEvent } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AddPlayer } from '.'
import { renderWithProviders } from '../../../../testUtils'

describe('AddPlayer component', () => {
  it('should add a new player to the store', () => {
    const { store } = renderWithProviders(<AddPlayer />)

    const nameInput = screen.getByLabelText<HTMLInputElement>('Nome:')
    fireEvent.change(nameInput, {
      target: {
        value: 'Player 1'
      }
    } as ChangeEvent<HTMLInputElement>)
    expect(nameInput).toHaveValue('Player 1')

    const form = screen.getByRole<HTMLFormElement>('form')
    fireEvent.submit(form)
    expect(store.getState().players).toHaveLength(1)
  })
})
