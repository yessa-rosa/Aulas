var aluno = {
    nome : "Aurora",
    anoEscolar : "2",
    turma : "c",
    notas : [6, 8, 7],
    estudar : function(){
     console.log("Estou estudando")
    },
    //metodo com função interna
    media : function(n1,n2,n3){
      return ((n1+n2+n3) / 3)
    },
    //metodo com função externa
    ocorrencias: listaDeOcorrencias
}
//Acesso as propriedades do objeto do aluno
console.log("o aluno", aluno.nome, "esta no", aluno.anoEscolar, "ano escolar.");
//Executar metodo de dentro do objeto
aluno.estudar()
console.log("Média final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
//Cria função externa para utilização do objeto
function listaDeOcorrencias(){
   console.log("Comeu na biblioteca");
   console.log("Xingou o colega");
   console.log("Não fex a atividade");
}
