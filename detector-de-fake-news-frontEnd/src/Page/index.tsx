import logo from '../assets/img/Logo_NicoBOT.png'
import buscar from '../assets/icons/buscar.svg'
import { Header, Section } from './styles'
import { usePostTitleMutation } from '../service/api'
import { useState } from 'react'

interface Response {
  respostaPrevisao: boolean
}

const Page = () => {
  const [purchase] = usePostTitleMutation()
  const [text, setText] = useState('')
  const [response, setResponse] = useState<boolean | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result: Response = await purchase({ news: text }).unwrap()
      setResponse(result.respostaPrevisao)
      console.log(result.respostaPrevisao)
    } catch (error) {
      console.error('Erro ao enviar o título', error)
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
        {response !== null && (
          <p>
            {response
              ? 'Notícia verificada como verdadeira'
              : 'Notícia verificada como falsa'}
          </p>
        )}
      </Section>
    </>
  )
}

export default Page
