import buscar from '../../assets/icons/buscar.svg'
import { usePostTitleMutation } from '../../service/api'
import { useState } from 'react'
import Loader from '../../component/loader'
import { DetectorContainer } from './styles'

const Detector = () => {
  const [purchase, { isLoading }] = usePostTitleMutation()
  const [text, setText] = useState('')
  const [response, setResponse] = useState<boolean | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result: ResponseGetByTitle = await purchase({ news: text }).unwrap()
      setResponse(result.respostaPrevisao)
      console.log(result.respostaPrevisao)
    } catch (error) {
      console.error('Erro ao enviar o título', error)
    }
  }

  return (
    <DetectorContainer>
      <h2>Detectar Fake News</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Titulo da noticia"
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : <img src={buscar} alt="Consultar" />}
        </button>
      </form>
      {response !== null && (
        <p>
          {response
            ? 'Notícia verificada como verdadeira'
            : 'Notícia verificada como falsa'}
        </p>
      )}
    </DetectorContainer>
  )
}

export default Detector
