import { Provider } from 'react-redux'
import { store } from './app/store'
import { AddPlayer } from './features/players/components/AddPlayer'
import { ListPlayers } from './features/players/components/ListPlayers'

function App() {
  return (
    <Provider store={store}>
      <AddPlayer />

      <ListPlayers />
    </Provider>
  )
}

export default App
