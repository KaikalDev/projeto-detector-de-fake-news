from google import generativeai as genai

GOOGLE_GEMINI_API_KEY = "AIzaSyC3qQtttrEyvCYk4UtZ5SqV0pRPNUvG4Ks"
genai.configure(api_key=GOOGLE_GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-1.5-pro-latest")

chat = model.start_chat(history=[]) 

def enviar_prompt(prompt, historico=[]):
    try:
        chat = model.start_chat(history=historico)
        response = chat.send_message(prompt)
        historico.append({"role": "user", "parts": [prompt]})
        historico.append({"role": "model", "parts": [response.text]})
        return {"resposta": response.text, "historico": historico}
    
    except Exception as e:
        return e

