import { Provider } from 'react-redux'
import { GlobalStyles } from './styles'
import { Store } from './store'
import Header from './component/header'
import { BrowserRouter } from 'react-router-dom'
import RoutesPages from './Routes/routes'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <RoutesPages />
      </BrowserRouter>
    </Provider>
  )
}

export default App
