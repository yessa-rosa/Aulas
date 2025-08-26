console.log("BOM DIA!");
//Laços de repetição

//PARA = FOR
for(var i = 0; i<5; i++){
    console.log ("Espero que esteja bem!");
    console.log("Espero que esteja bem!")
}
console.log("Se não, melhore")

//ENQUANTO = while
var contagem
while (contagem < 10){
    console.log("Estou repetindo infinitamente");
    contagem++
}


//FUNÇÔES

//Cria a função
function bemVindo(){
    var nome = prompt("Nome:")
    console.log("Olá,", nome)
}

// Chama a função
bemVindo()

//Função com parametros
function calcularIdade(idade){
    alert("Sua idade é:", idade)
}

calcularIdade(16)
calcularIdade(100)


//FUNÇÔES COM RETORNO

function soma (valor1, valor2){
let resultado = valor1 + valor2

return resultado
}

var valorSomado = soma(7, 6)

console.log("A soma deu:", valorSomado);
