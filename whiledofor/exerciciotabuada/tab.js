function contar() {
    var numero = document.querySelector('input#num')
    var tabuada = document.querySelector('select#tab')
    if (numero.value.length == 0) {
        alert('valor invalido')
    } else {
        var num = Number(numero.value)
        tabuada.innerHTML = ''
        for(var c=1;c<=10;c++) {
            var item = document.createElement('option')
            item.text = `${num}x${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item);
        }
    }
}