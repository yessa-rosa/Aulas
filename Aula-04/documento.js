//Objeto Window = janela do navegador

console.log(window.alert("Oi"));
window.prompt("Me diz um nome")

//objeto document = código html do site

console.log(document);
console.log(document.head);
console.log(document.body);


//Acessando elementos do html
//Por Tag, Class e Id

//Busca elementos pela mesma tag
var titulos = document.getElementsByTagName("h1")

console.log(titulos)

//Busca elementos pela mesma class
var paragrafos = document.getElementsByClassName("para")

console.log(paragrafos)

//Busca elementos pelo ID
var achado = document.getElementById("p3")

console.log(achado)

//modificando elemento da lista de achados pela tag
titulos[1].style.color = "green"
titulos[2].style.backgroundColor = "pink"

//modificando elemento achado pelo id
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeight = "bold"

//modificando elemento achado pelo id

//trocando o texto do elemento
achado.innerText = "tómas"

//trocando o html do elemento
achado.innerHTML = "<h2>Novo texto</h2>"

//criar uma função para ser ativada

function cliquei(){
    console,log("Parabens")
    console.log("OK");
}