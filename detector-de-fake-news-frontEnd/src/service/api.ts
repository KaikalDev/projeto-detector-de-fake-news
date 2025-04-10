import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ResponseGetByTitle {
  respostaPrevisao: boolean
}

interface RequestGetByTitle {
  news: string
}

interface ChatRequest {
  prompt: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-detector-fake-news.onrender.com/api',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    postTitle: builder.mutation<ResponseGetByTitle, RequestGetByTitle>({
      query: (body) => ({
        url: '/checkByTitle/',
        method: 'POST',
        body
      })
    }),
    postChetQuestion: builder.mutation<ChatResponse, ChatRequest>({
      query: (body) => ({
        url: '/fetchGeminiApi/',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePostTitleMutation, usePostChetQuestionMutation } = api

export default api
