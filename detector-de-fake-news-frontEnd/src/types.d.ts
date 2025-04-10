declare type ChatResponse = {
  resposta: {
    resposta: string
    historico: {
      role: string
      parts: string[]
    }[]
  }
}

declare interface ResponseGetByTitle {
  respostaPrevisao: boolean
}

declare interface RequestGetByTitle {
  news: string
}

declare interface ChatRequest {
  prompt: string
}
