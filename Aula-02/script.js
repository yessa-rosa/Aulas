// Interação com o usuário via prompt
//var nome = prompt ("digite um nome:")
//alert("Seu nome é:" + nome)

//CONDICIONAIS

//SE, SENÂO SE , SENÂo
//IF, IF ELSE , ELSE

var estaVivo = 7

if(estaVivo == true){
    console.log("Parabens, voce esta vivo")
}

else if(estaVivo == false){
    console.log("Infelizmente, voce morreu");
}
else{
    console.log("Voce nao está nada")
}

// ESCOLHA / CASO
// SWItCH / CASE

var corCamisa = "Amarela"

switch(corCamisa){
    case "Azul" :
         console.log("Voce ganhou um voucher")
    break
    case "Amarela" :
         console.log("Voce ganhou um body splash")
    break
     case "Vermelha" :
         console.log("Voce ganhou um brinde")
    break
    default:
        console.log("cor da camisa inválida")
    break
}

//ATiVIDADE NOTA
//Até 5 = reprovado, 5 a 6 = recuperação,
// acima de 6 = passou

var nota = prompt("Digite sua nota:")
if(nota>6){
    alert("Voce passou");
}
else if(nota>=5 && nota<=6){
    alert("Voce esta de recupertação")
}
else{
    alert("Voce foi reprovado")
} 
