/* urls API gitHub */
const url = "https://api.github.com/users/codexdevbrn"
const url2 = "https://api.github.com/users/codeReeaper"

/* Seleciona onde as propriedades criadas vão entrar no HTML */
const container = document.querySelector("#container");
const text = document.querySelector("#text");

/* Array onde são guardadas as respostas do retorno da API */
const responseArray1 = [];
const responseArray2 = [];

/* função que chama faz a chamada API e a trata */
async function getInfoGitHub() {
    /* Método fetch que faz a requisição na url */
    const response = await fetch(url);
    const response2 = await fetch (url2);

    /* Guarda o retorno em uma constante no formato JSON */
    const data = await response.json();
    const data2 = await response2.json();

    /* Coloca a resposta no array */
    responseArray1.push(data);
    responseArray2.push(data2);

    /* mostra no console do navegador a resposta da API (PODE SER APAGADO) */
    console.log(data);
    console.log(data2);

    /* map da primeira resposta da api */
    responseArray1.map((itens) => {
        const image = document.createElement("img");
        image.id = "image";
        image.src = itens.avatar_url

        const textH3 = document.createElement("h3");
        textH3.innerHTML = itens.name + "<em>" + " (" + itens.login + ") " + "</em></br><em id='dev'>Dev Front-end</em>";

        container.appendChild(image);
        text.appendChild(textH3);

    });
/* map da segunda resposta da api */
    responseArray2.map((itens) => {
        const image = document.createElement("img");
        image.id = "image";
        image.src = itens.avatar_url

        const textH3 = document.createElement("h3");
        textH3.innerHTML = itens.name + "<em>" + " (" + itens.login + ") " + "</em></br><em id='dev'>Dev Front-end</em>";

        container.appendChild(image);
        text.appendChild(textH3)

    });
}

/* executa a função */
getInfoGitHub();