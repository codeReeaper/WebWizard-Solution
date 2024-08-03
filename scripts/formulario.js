document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // IMPEDIR O ENVIO PADRÃO DO FORM

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('http://127.0.0.1:3306/questionario', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Erro ao enviar os dados');
    }).then(data => {
        alert(data);
        window.location.href = 'agradecimento.html';
    }).catch(error => {
        console.error(error);
        alert('Erro ao enviar os dados');
    });
});