import styled from 'styled-components'

export const ChatContainer = styled.section`
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

export const ChatConversation = styled.section`
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 246px);

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }

  ul::-webkit-scrollbar {
    width: 8px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }

  ul::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`

export const FooterQuestion = styled.footer`
  width: 100vw;
  margin-top: 24px;
  max-height: 116px;

  form {
    max-width: 50vw;
    margin: 0 auto;
    background-color: #444;
    border-radius: 20px;
    position: relative;
    padding: 16px;

    textarea {
      width: 100%;
      height: 80px;
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
