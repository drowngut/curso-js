function contar() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo')
    let result = document.querySelector('div#result')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('preencha todos os dados')
    } else {
        result.innerHTML = 'contando <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('invaliviado')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f;c += p) {
                result.innerHTML += ` ${c} \u{1F595}`
            }
            
        } else {
            for (let c=i; c>=f; c-=p) {
                result.innerHTML += ` ${c} \u{1F595}`
            }
        }
        result.innerHTML += `fodase`

    }
}








/* for mais usado pra simplificar
for (var c = 1; c < 10; c++) {
    console.log("penis");
}*/
/* repetiçoes do e while
var c = 1
do {
    console.log("penis");
    c++
} while (c < 5);

var c = 1
while (c < 10) {
    console.log('sim, a dor é foda');
    c++
}*/