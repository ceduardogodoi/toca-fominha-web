import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlayer } from '../../playersSlice'
import { Player } from '../../../../models/Player'
import { AppDispatch } from '../../../../app/store'

export function AddPlayer() {
  const [state, setState] = useState<Player>({
    name: ''
  })

  const dispatch = useDispatch<AppDispatch>()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    dispatch(addPlayer(state))
  }

  return (
    <form name="add-player-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Nome do jogador"
        value={state.name}
        onChange={handleChange}
      />

      <button type="submit">Adicionar jogador</button>
    </form>
  )
}
