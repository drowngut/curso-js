/*var resultado1 = Number(prompt("um numero"))
var resultado2 = Number(prompt("outro numero"))
var soma = resultado1 + resultado2
document.write(`seu numero foi <strong>${soma.toFixed(1).replace('.', '.')}</strong> <i>foda ne</i>`)
var salario = Number(prompt("quantos conto por mes"))
document.write(` <strong>só</strong> ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace('.', ',')}?`)*/
//var para = window.document.getElementsByTagName('p')[0] //0==1° ... 1==2°
/*var p2 = window.document.getElementById('cc') //id
var p3 = document.getElementsByClassName('piscaxereca2')//classe
var p4 = document.getElementsByName()*/

var momento = new Date();
var diaSemana = momento.getDay();
switch(diaSemana) {
    case 0:
        console.log("Hoje e Domingo")
        break
    case 1:
        console.log("Hoje e Segunda")
        break
    case 2:
        console.log("Hoje e Terça")
        break
    case 3:
        console.log("Hoje e Quarta")
        break
    case 4:
        console.log("Hoje e QUinta")
        break

    case 5:
        console.log("Hoje e Sexta")
        break
    case 6:
        console.log("Hoje e Sabado")
        break

    default:
        console.log("dia invalido")
        break
}












function calcular() {
var txtv = document.querySelector('input#vel')
var res = document.querySelector('div#resultado')
var velocidade = Number(txtv.value);
res.innerHTML = `<p>velocidade: ${velocidade}</p>`
res.innerHTML += "<p>fodase</p>"
}

function some() {
    var txtn1 = document.querySelector('input#txt1');
    var txtn2 = document.querySelector('input#txt2');
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    var resultado = document.querySelector('div#result')
    var s = n1 + n2;
    resultado.innerHTML = s;
}





var a = document.getElementById('aria');

a.addEventListener('click', clicar)
a.addEventListener('mouseover', entrou)
a.addEventListener('mouseout', saiu)

function clicar() {
    a.innerText = "clicou"
    a.style.background = "blue"
}

function entrou() {
    a.innerText = "entrou"
    a.style.background = "purple"
}

function saiu() {
    a.innerText = "saiu"
    a.style.background = "pink"
}





/*var numeral = 1
numeral += 2 <-- //recebe ele mesmo mais 2 se fosse atualizaçoo de valor seria apenas = 
document.write(numeral)
(x += 1 fica x++ ou ate ++x dependendo da ordem)
*/

/* dados pra entender tlgd
var resultado1 = Number(prompt("um numero"))
var resultado2 = Number(prompt("outro numero"))
var soma = resultado1 + resultado2
document.write(`seu numero foi <strong>${soma.toFixed(1).replace('.', '.')}</strong> <i>foda ne</i>`)
var salario = Number(prompt("quantos conto por mes"))
document.write(` <strong>só</strong> ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace('.', ',')}?`)*/


/*var letras = "ABC"
document.write(letras.length.toUpperCase().toLowerCase())*/
