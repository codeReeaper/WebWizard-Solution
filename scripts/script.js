/* cria o header em todas as páginas, economizando código e otimizando */
document.addEventListener('DOMContentLoaded', function() {
    var newTitle = document.createElement("div");
    newTitle.id = 'title';

    var newHeader = document.createElement("header");
    var listHeader = document.createElement("ul");

    var contentsDiv = document.createElement("h1");
    contentsDiv.textContent = 'WebWizards';
    newTitle.appendChild(contentsDiv);

    var contentsDiv2 = document.createElement("h1");
    contentsDiv2.textContent = 'Solutions';
    newTitle.appendChild(contentsDiv2);

    var item1 = document.createElement('li');
    var link1 = document.createElement('a');
    link1.textContent = 'Início';
    link1.href = 'index.html';
    item1.appendChild(link1);

    var item2 = document.createElement('li');
    var link2 = document.createElement('a');
    link2.textContent = 'Serviços';
    link2.href = '#';
    item2.appendChild(link2);

    var item3 = document.createElement('li');
    var link3 = document.createElement('a');
    link3.textContent = 'Sobre';
    link3.href = 'about.html';
    item3.appendChild(link3);

    var item4 = document.createElement('li');
    var link4 = document.createElement('a');
    link4.textContent = 'Entre em Contato';
    link4.href = 'contact.html';
    link4.id = 'inscreva-se-btn'
    item4.appendChild(link4);


    newHeader.appendChild(newTitle);
    listHeader.appendChild(item1);
    listHeader.appendChild(item2);
    listHeader.appendChild(item3);
    listHeader.appendChild(item4);

    newHeader.appendChild(listHeader);

    document.body.insertBefore(newHeader, document.body.firstChild);
});