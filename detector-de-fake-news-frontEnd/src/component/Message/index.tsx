import { BalloonMessage } from './styles'
import ReactMarkdown from 'react-markdown'

type Param = {
  role: string
  part: string
}

const Message = ({ part, role }: Param) => (
  <BalloonMessage isBot={role != 'user'}>
    <strong>{role == 'user' ? 'You' : 'NicoBot'}:</strong>
    <ReactMarkdown>{part}</ReactMarkdown>
  </BalloonMessage>
)

export default Message
