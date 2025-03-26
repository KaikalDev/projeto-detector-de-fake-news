import styled from 'styled-components'

export const Header = styled.header`
  padding: 8px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  h1 {
    font-size: 24px;
    align-items: center;
    display: flex;
    gap: 8px;
    img {
      width: 60px;
    }
  }
`

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  form {
    background-color: #444;
    border: none;
    padding: 16px 25px;
    border-radius: 20px;
    position: relative;

    textarea {
      width: 40vw;
      height: 100px;
      border: none;
      background-color: transparent;
      color: #eee;
      resize: none;

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #eee;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 10px;
      right: 10px;
      cursor: pointer;

      &:disabled {
        cursor: default;
      }
    }
  }
`
