import styled from 'styled-components'

export const BalloonMessage = styled.li<{ isBot?: boolean }>`
  background-color: #444;
  width: 80%;
  padding: 28px 16px;
  border-radius: 20px;
  text-align: ${(props) => (props.isBot ? 'start' : 'end')};
  align-self: ${(props) => (props.isBot ? 'flex-start' : 'flex-end')};
  display: flex;
  flex-direction: column;
`
