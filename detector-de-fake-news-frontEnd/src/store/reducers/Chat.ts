import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Chat = {
  response: ChatResponse | undefined
}

const initialState: Chat = {
  response: undefined
}

const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    updateChat: (state, action: PayloadAction<ChatResponse>) => {
      state.response = action.payload
    }
  }
})

export const { updateChat } = ChatSlice.actions
export default ChatSlice.reducer
