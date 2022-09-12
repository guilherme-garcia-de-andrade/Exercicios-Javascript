//PASSO 01 - SEQUÊNCIAS BÁSICAS
//1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"
console.log("Olá, Mundo!");

/* 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas
para ela:
Ex: Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer!
*/
//let nomePessoa = prompt("Informe seu nome: ");
//console.log("Olá " + nomePessoa + ", é um prazer te conhecer!");

/* 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
final uma mensagem.
Ex: Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
*/
//let nome_funcionario = prompt("Olá funcionário, informe seu nome: ");
//let salario_funcionario = prompt("certo, " + nome_funcionario + " agora informe seu salário: ");
//console.log("O funcionário " + nome_funcionario + " tem um salário de R$ " + salario_funcionario);

/* 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
entre eles.
Ex: Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13.

const numero_1 = parseInt(prompt("Informe o primeiro número: "));
const numero_2 = parseInt(prompt("Informe o segundo número: "));
console.log("A soma entre o " + numero_1 + " e o " + numero_2 + 
" é igual a: " + (numero_1 + numero_2));
*/

/* 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
na tela a sua média na disciplina.
Ex: Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5

let primeiraNota = parseFloat(prompt("Qual a primeira nota? "));
let SegundaNota = parseFloat(prompt("Qual a segunda nota? "));
console.log("A média entre " + primeiraNota + " e a " + SegundaNota + 
" é igual a " + ((primeiraNota + SegundaNota) / 2).toFixed(2));
*/

/* 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex: Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10

const numeroInteiro = parseInt(prompt("Informe um número: "));
console.log("O antecessor de " + numeroInteiro + " é " + (numeroInteiro - 1) + 
". O sucessor de " + numeroInteiro + " é " + (numeroInteiro + 1) + ".");
*/

/* 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
sua terça parte.
Ex: Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666

const numeroReal = parseFloat(prompt("Digite um número: "));
console.log("O dobro do número " + numeroReal + " é " + (numeroReal * 2) + 
", e sua terça parte é " + (numeroReal / 3).toFixed(4));
*/

/* 8) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let dinheiroCarteira = parseFloat(prompt("Quanto dinheiro você tem na carteira? "));
console.log("Com o valor de R$ " + dinheiroCarteira + " você pode comprar US$ " + (dinheiroCarteira / 3.45).toFixed(2) +
" doláres");
*/

/* 9) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const larguraParede = parseFloat(prompt("Qual a largura da parede? "));
const alturaParede = parseFloat(prompt("Qual a altura da parede? "));
const metrosQuadrados = alturaParede * larguraParede;
console.log("A área total a ser pintada é de " + metrosQuadrados + 
" m², e a quantidade de tinta necessária é de " + (metrosQuadrados / 2) + " litros");
*/

/* 10) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.

const precoProduto = parseFloat(prompt("Qual o valor do produto? "));
console.log("O valor total do produto é de R$ " + precoProduto + 
", com desconto de 5% sua compra totalizou R$ " + ((precoProduto * 5/100) + precoProduto).toFixed(2));
*/

/* 11) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.

let salarioFunc = parseFloat(prompt("Olá funcionário, informe seu salário: "));
console.log("Seu novo salário com 15% de aumento é de R$ " + ((salarioFunc * 15/100)+salarioFunc).toFixed(2));
*/

/* 12) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte
a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. 
Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

const km_rodados = parseFloat(prompt("Cliente, informe quantos km você rodou com o carro: "));
const dias_aluguel = parseInt(prompt("Agora informe por quantos dias voce alugou o veículo: "));
console.log("O valor total a ser pago é de R$ " + ((dias_aluguel * 90) + (km_rodados * 0.20)));
*/

/* 13) Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário,
sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

let diasTrabalhados = parseInt(prompt("Quantos dias você trabalhou nesse mês? "));
console.log("Com base nos dias trabalhados esse mês seu salário é de R$ " +
((8 * 25) * diasTrabalhados).toFixed(2));
*/

/* TERMINAR [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 
Considere que um fumante perde 10 min de vida a cada cigarro. -> cada dia tem 1440 min = 144 cigarros
Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

let cigarros_dia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let anos_fumando = parseInt(prompt("Há quantos anos você fuma? "));
let perde_vida_dia = 144;
console.log("Você perderá um total de " + (perde_vida_dia  ))
*/
