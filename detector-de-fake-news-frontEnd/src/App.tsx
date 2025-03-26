import { Provider } from 'react-redux'
import Page from './Page'
import { GlobalStyles } from './styles'
import { Store } from './store'

function App() {
  return (
    <Provider store={Store}>
      <GlobalStyles />
      <Page />
    </Provider>
  )
}

export default App
