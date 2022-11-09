import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../app/store';
import { fetchAllPlayers } from '../../playersSlice';

export function ListPlayers() {
  const { players, loading } = useSelector((rootState: RootState) => rootState.players);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllPlayers())
  }, [])

  if (loading === 'pending') {
    return <p>Buscando jogadores...</p>
  }

  if (loading === 'failed') {
    return <p>Erro ao buscar jogadores.</p>
  }

  if (players.length < 1) {
    return <p>Não há jogadores registrados.</p>
  }

  return (
    <ul>
      {players.map(player => (
        <li key={player.name}>{player.name}</li>
      ))}
    </ul>
  );
}
