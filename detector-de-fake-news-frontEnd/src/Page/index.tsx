import logo from '../assets/img/Logo_NicoBOT.png'
import buscar from '../assets/icons/buscar.svg'
import { Header, Section } from './styles'
import { usePostTitleMutation } from '../service/api'
import { useState } from 'react'

const Page = () => {
  const [purchase] = usePostTitleMutation()
  const [text, setText] = useState('')
  const [response, setResponse] = useState<Response | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await purchase({ news: text })
      setResponse(res.data)
      setText('')
    } catch (error) {
      console.error('Erro ao verificar notícia:', error)
      setResponse({ resp: false })
    }
  }

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
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Titulo da noticia"
          ></textarea>
          <button type="submit">
            <img src={buscar} alt="" />
          </button>
        </form>
        {response && !response.resp ? (
          <p>Notícia Fake detectada!</p>
        ) : (
          <p>Notícia verdadeira</p>
        )}
      </Section>
    </>
  )
}

export default Page
