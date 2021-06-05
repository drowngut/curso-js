var resultado1 = Number(prompt("um numero"))
var resultado2 = Number(prompt("outro numero"))
var soma = resultado1 + resultado2
document.write(`seu numero foi <strong>${soma.toFixed(1).replace('.', '.')}</strong> <i>foda ne</i>`)
var salario = Number(prompt("quantos conto por mes"))
document.write(` <strong>só</strong> ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace('.', ',')}?`)
soma.style.color = "green"