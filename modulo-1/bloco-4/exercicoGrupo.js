// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// 3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.


// Exercícios 1:
let sum = 0;
for (let index = 0; index <= 50; index ++){
    sum += index; 
}
console.log("A soma é:", sum);

// Exercício 2:
let div = 0;
for (index = 2; index <= 150; index += 1){
    if(index%3 === 0){
        div += 1;
    }
}
if(div == 50){
    console.log("mensagem secreta.");
}

// Exercício 3:
let pessoax = 15;
let pessoay = 20;
let pessoaz = 30;
let maisNova;
if(pessoax < pessoay && pessoax < pessoaz){
    console.log("Pessoa x é a mais nova");
}else if(pessoay < pessoax && pessoay < pessoaz){
    console.log("Pessoa y é a mais nova");
}else{
    console.log("Pessoa z é a mais nova");
}
