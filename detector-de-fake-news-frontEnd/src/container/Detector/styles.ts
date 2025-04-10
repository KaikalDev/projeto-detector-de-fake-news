import styled from 'styled-components'

export const DetectorContainer = styled.section`
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
