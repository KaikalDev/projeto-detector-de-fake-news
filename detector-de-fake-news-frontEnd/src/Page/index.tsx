import logo from '../assets/img/Logo_NicoBOT.png'
import buscar from '../assets/icons/buscar.svg'
import { Header, Section } from './styles'

const Page = () => {
  return (
    <>
      <Header>
        <h1>
          <img src={logo} alt="NicoBoot" />
          NicoBOT
        </h1>
      </Header>
      <Section>
        <h2>Detectar Fake News</h2>
        <form>
          <textarea name="" id="" placeholder="Titulo da noticia"></textarea>
          <button type="submit">
            <img src={buscar} alt="" />
          </button>
        </form>
      </Section>
    </>
  )
}

export default Page
