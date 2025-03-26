import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Response {
  respostaPrevisao: boolean
}

interface Request {
  news: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api'
  }),
  endpoints: (builder) => ({
    postTitle: builder.mutation<Response, Request>({
      query: (body) => ({
        url: '/checkByTitle/',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePostTitleMutation } = api

export default api
