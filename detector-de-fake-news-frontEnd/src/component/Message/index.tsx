import { BalloonMessage } from './styles'

type Param = {
  role: string
  part: string
}

const Message = ({ part, role }: Param) => (
  <BalloonMessage isBot={role != 'user'}>
    <strong>{role == 'user' ? 'You' : 'NicoBot'}:</strong>
    <p>{part}</p>
  </BalloonMessage>
)

export default Message
