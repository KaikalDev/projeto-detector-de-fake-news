import styled from 'styled-components'

export const HeaderStyle = styled.header`
  padding: 8px;
  width: 100%;
  max-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
    align-items: center;
    display: flex;
    gap: 8px;
    img {
      width: 60px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    gap: 16px;
    margin-right: 16px;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
