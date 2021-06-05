var numeral = document.getElementById('num')
var result = document.getElementById('result')
var list = document.getElementById('sel')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(numeral.value) && !inLista(numeral.value, valores)) {
        valores.push(Number(numeral.value))
        var item = document.createElement('option')
        item.text = `${numeral.value} adicionado`
        list.appendChild(item)
        result.innerHTML = ''
    } else {
        alert('invalido')
    }
    numeral.value = ''
    numeral.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('bota numero krl')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor  = valores[0]
        var soma = 0
        var media = 0




        for(var pos in valores) {
            soma += valores[pos]
            media
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        result.innerHTML = ''
        result.innerHTML += `<p> tem ${tot} numeros</p>`
        result.innerHTML += `<p> maior valor=${maior}</p>`
        result.innerHTML += `<p> menor valor=${menor}</p>`
        result.innerHTML += `<p> soma da = ${soma}</p>`
        result.innerHTML += `<p> media da = ${media}</p>`


    }
}