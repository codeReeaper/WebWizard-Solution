const url = "https://api.github.com/users/codexdevbrn"
const url2 = "https://api.github.com/users/codeReeaper"

const container = document.querySelector("#container");
const text = document.querySelector("#text");

const responseArray1 = [];
const responseArray2 = [];

async function getInfoGitHub() {
    const response = await fetch(url);
    const response2 = await fetch (url2);

    const data = await response.json();
    const data2 = await response2.json();

    responseArray1.push(data);
    responseArray2.push(data2);

    console.log(data);
    console.log(data2);

    responseArray1.map((itens) => {
        const image = document.createElement("img");
        image.id = "image";
        image.src = itens.avatar_url

        const textH3 = document.createElement("h3");
        textH3.innerText = itens.name + "<em>" + "(" + itens.login + ")" + "</em></br><em class='dev'>Dev Front-end</em>";

        container.appendChild(image);
        text.appendChild(textH3);

    });

    responseArray2.map((itens) => {
        const image = document.createElement("img");
        image.id = "image";
        image.src = itens.avatar_url

        const textH3 = document.createElement("h3");
        textH3.innerText = itens.name + "<em>" + "(" + itens.login + ")" + "</em></br><em class='dev'>Dev Front-end</em>";

        container.appendChild(image);
        text.appendChild(textH3)

    });
}

getInfoGitHub();