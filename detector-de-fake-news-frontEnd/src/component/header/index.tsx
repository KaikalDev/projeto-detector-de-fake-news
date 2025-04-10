import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/Logo_NicoBOT.png'
import { HeaderStyle } from './styles'

const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderStyle>
      <h1>
        <img src={logo} alt="NicoBoot" />
        NicoBOT
      </h1>
      <ul>
        <li>
          <button onClick={() => navigate('/')}>ChatBot</button>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <button onClick={() => navigate('/DetectorFakeNews')}>
            Detector de Fake News
          </button>
        </li>
      </ul>
    </HeaderStyle>
  )
}

export default Header
