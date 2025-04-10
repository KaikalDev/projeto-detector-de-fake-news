import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './reducers/Chat'

import api from '../service/api'

export const Store = configureStore({
  reducer: {
    chat: chatReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type AppDispatch = typeof Store.dispatch
export type RootReducer = ReturnType<typeof Store.getState>
