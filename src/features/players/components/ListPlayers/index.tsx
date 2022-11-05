import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/store';

export function ListPlayers() {
  const players = useSelector((state: RootState) => state.players);

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
