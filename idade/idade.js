function clicada() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.querySelector('input#nasc');
    var resultado = document.querySelector('div#resultado');
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        document.alert('digito errado otario')
    } else {
        var fsex = document.getElementsByName('radsexo');
        var idade = ano - Number(fAno.value);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >= 0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 60) {

            } else {

            }
        } else {
            gen = 'mulher'
            if (idade >= 0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 60) {

            } else {
                
            }
        }
        resultado.innerHTML = `é um ${gen} com ${idade}`
    }
}
