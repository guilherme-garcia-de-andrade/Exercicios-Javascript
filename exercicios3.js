// PASSO 03 - CONDIÇÕES COMPOSTAS
/* 23) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais

const primeiroNumero = parseInt(prompt("Informe o primeiro numero: "));
const segundoNumero = parseInt(prompt("Agora informe o segundo número: "));
if (primeiroNumero > segundoNumero){
    console.log("O primeiro numero é o maior!");    
}else if (primeiroNumero < segundoNumero){
    console.log("O segundo número é o maior!");
}else if (primeiroNumero == segundoNumero){
    console.log("Não existe valor maior, os dois são iguais!");
}else{
    console.log("Você não digitou um número ou digitou um número inválido.")
}
*/

/* 24) Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final,
de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/
