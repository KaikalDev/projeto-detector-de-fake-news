//TODO: fazer a inscrição na api grátis da gemini, criar criar a rota que vai

// falta fazer a inscrição na api do gemini
API_KEY = "";
API_URL = `restOfTheApi/${API_KEY}`;

const userMessage = null;

const generateApiResponse = async () => {
    options = {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            contents:[
                {parts: [{text: userMessage}]} // userMessage vai ser a mensagem enviada pelo usuário
            ]
        })
    }

    try {
        const response = await fetch(API_URL, options);
        const data = await response.json(); // se tudo der certo, recebe a response da api pronta para eu manipular

        if(!response.ok) throw new Error("Erro na requisição");
        else {
            console.log("Deu certo, amém");
            console.log(data);
        }
    }
    catch (error){
        console.error(error);
    }
}

