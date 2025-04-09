from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import TitleCheckerSerializer
from .models.model import load_models
from .geminiService import enviar_prompt

@api_view(["POST"])
def handleText(request):
    if request.method == "POST":
        dadosBruto = TitleCheckerSerializer(data=request.data)

        if dadosBruto.is_valid():
            modelo_nb, modelo_vect = load_models()

            dadosValidados = dadosBruto.validated_data['news']
            dadosValidados = [dadosValidados]

            dadosVetorizados = modelo_vect.transform(dadosValidados)

            previsao = modelo_nb.predict(dadosVetorizados)

            respostaPrevisao = True if previsao[0] == 1 else False

            return Response({"respostaPrevisao": respostaPrevisao}) 

        else:
            return Response(dadosBruto.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"error": "Método inválido para esta rota da API! Só POSt é permitido"},status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(["POST"])
def handleChatBotResponse(request):
    if request.method == "POST":
        prompt = request.data.get("prompt")
        historico = request.session.get("historico", [])

        if not prompt:
            return Response({"error": "O campo 'prompt' é obrigatório."}, status=status.HTTP_400_BAD_REQUEST)

        resposta = enviar_prompt(prompt, historico)

        if isinstance(resposta, Exception):
            return Response({"error": f"Erro ao enviar mensagem para o Gemini: {str(resposta)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        request.session["historico"] = resposta["historico"]

        return Response({"resposta": resposta})

    else:
        return Response({"error":'Método inválido para esta rota da API! Só POSt é permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    