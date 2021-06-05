//objeto
let cara = {
nome:"Penis", 
idade:27, 
sexo:'masculino', 
peso:61.3, 
bucetar(p=0){
    console.log('bucetastes')
    this.peso += p //this se refere ao porprio objeto para atribuir mais valores
    } 
}
cara.bucetar(5)
console.log(cara.peso)