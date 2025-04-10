import { useDispatch, useSelector } from 'react-redux'
import { ChatContainer, ChatConversation, FooterQuestion } from './styles'
import { RootReducer } from '../../store'
import Message from '../../component/Message'
import { useEffect, useRef, useState } from 'react'
import { usePostChetQuestionMutation } from '../../service/api'
import { updateChat } from '../../store/reducers/Chat'
import Loader from '../../component/loader'
import buscar from '../../assets/icons/buscar.svg'

const ChatBot = () => {
  const currentChat = useSelector((state: RootReducer) => state.chat.response)
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [purchase, { isLoading }] = usePostChetQuestionMutation()
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result: ChatResponse = await purchase({ prompt: text }).unwrap()
      dispatch(updateChat(result))
      setText('')
    } catch (error) {
      console.error('Erro ao enviar o título', error)
    }
  }

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentChat])

  if (currentChat) {
    return (
      <>
        <ChatConversation>
          <ul>
            {currentChat.resposta.historico.map((msg, index) => (
              <Message key={index} role={msg.role} part={msg.parts[0]} />
            ))}
            <div ref={endOfMessagesRef} />
          </ul>
        </ChatConversation>
        <FooterQuestion>
          <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Faça sua pergunta"
            ></textarea>
            <button type="submit" disabled={isLoading}>
              {isLoading ? <Loader /> : <img src={buscar} alt="Consultar" />}
            </button>
          </form>
        </FooterQuestion>
      </>
    )
  } else {
    return (
      <ChatContainer>
        <h2>ChatBot - NicoBot</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Faça sua pergunta"
          ></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? <Loader /> : <img src={buscar} alt="Consultar" />}
          </button>
        </form>
      </ChatContainer>
    )
  }
}

export default ChatBot
