function carregamento() {
    var mensagem = document.querySelector('div#mensagem');
    var imagem = document.querySelector('img#img');
    var fundo = window.document.body
    var date = new Date();
    //var horario = date.getHours();
    var horario = 5;
    var minuto = date.getMinutes();
    mensagem.innerHTML = `sao ${horario}:${minuto}`
    if (horario >= 0 && horario < 12) {
        mensagem.innerHTML += ", bom dia";
        imagem.src = "manha.png";
        fundo.style.background = '#f0d9bf';
    } else if (horario >= 12 && horario < 18) {
        mensagem.innerHTML += ", boa tarde"
        imagem.src = "tarde.png"
        fundo.style.background = '#9c6e74';
    } else {
        mensagem.innerHTML += ", boa noite"
        imagem.src = "noite.png"
        fundo.style.background = '#091b1d'
    }

}

