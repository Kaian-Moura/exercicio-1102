var nota1 = 8 //Nota um
var nota2 = 5 //Nota dois
var nota3 = 7 //Nota três
var minmedia = 7 //Média mínima pra aprovar
var media = (nota1 + nota2 + nota3) / 3; //Cálculo da média do aluno

for(var i = 0; i < 1; i++){
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
        console.log("Por favor, insira notas válidas entre 0 a 10")  //Lógica pra usar números certos
    }
}

var notafinal = (media >= minmedia) ? "Aprovado :D" : "Reprovado :("

console.log("Média do aluno: " + media.toFixed(2)); // Duas casa decimais
console.log("Situação do aluno: " + notafinal); // Nota final é a média das 4 notas