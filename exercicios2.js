// PASSO 02 - CONDIÇÕES BÁSICAS
/* 14) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, 
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, 
cobrando R$5 por cada Km acima da velocidade permitida.

const velocidade_carro = parseInt(prompt("Informe sua velocidade: "));
if (velocidade_carro < 81){
    console.log("Você está dentro do limite de velocidade e não foi multado!");
}else{
    console.log("Você está acima do limite de velocidade e será multado! O valor total da multa é de R$ " + 
((velocidade_carro - 80) * 5));
}
*/

/* 15) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.

let ano_nascimento = parseInt(prompt("Olá, informe o ano de seu nascimento: "));
let calculo_idade = 2022 - ano_nascimento;
if (calculo_idade >= 18 && calculo_idade < 60){
    console.log("Sua idade é de " + calculo_idade + " anos e você está apto a votar.");
} else if (calculo_idade >= 14 && calculo_idade <= 16){
    console.log("Sua idade é de " + calculo_idade + " anos e seu voto é facultativo");
} else if (calculo_idade >= 60){
    console.log("Sua idade é de " + calculo_idade + " anos e seu voto é facultativo");
} else{
    console.log("Sua idade é de " + calculo_idade + " anos e você não pode votar!");
}
*/

/* 16) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. 
No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).

let nome_aluno = prompt("Olá aluno, por favor informe seu nome: ");
let nota_1 = parseFloat(prompt(nome_aluno + " qual é a sua primeira nota? "));
let nota_2 = parseFloat(prompt(nome_aluno + " qual é a sua segunda nota? "));
media_aluno = ((nota_1 + nota_2) / 2).toFixed(2);

if (media_aluno > 7.0){
    console.log("Aluno " + nome_aluno + ", sua média foi de " + media_aluno + " e você está aprovado!");
}else{    
    console.log("Aluno " + nome_aluno + ", sua média foi de " + media_aluno + " e você está reprovado!");
}
*/

/* 17) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.

const numeroUsuario = parseInt(prompt("Informe um número para saber se ele é par ou impar: "));
if (numeroUsuario % 2 === 0){
    console.log("O número " + numeroUsuario + " é par.");
}else{
    console.log("O número " + numeroUsuario + " é impar.");
}
*/

/* 18) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.

const ano_usuario = parseInt(prompt("Informe um ano para saber se ele é bissexto: "));
const dias_ano_usuario = parseInt(prompt("O ano " + ano_usuario + " possuí quantos dias? "));
if (dias_ano_usuario == 365){
    console.log("O ano " + ano_usuario + " não é um ano bissexto!");
}else if (dias_ano_usuario == 366){
    console.log("O ano " + ano_usuario + " é um ano bissexto!");
}else{
    console.log("Você não informou um ano e/ou número de dias válido");
}
*/

/* 19) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação
ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.

let ano_nascimento = parseInt(prompt("Informe seu ano de nascimento: "));
let ano_atual = parseInt(prompt("Agora eu preciso saber qual o ano atual: "));
let idade_usuario = ano_atual - ano_nascimento;

if (idade_usuario < 18){
    console.log("Faltam " + (18 - idade_usuario) + " anos para você poder se alistar.");
}else{
    console.log("Já se passaram " + (idade_usuario - 18) + " anos do seu alistamento militar.");
}
*/

/* 20) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, 
mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/

/* 21) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos,
mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente
e calcule o preço com desconto. Sabendo que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto

const nome_cliente = prompt("Olá, seja bem-vindo(a) a nossa loja, por favor informe seu nome: ");
const sexo = prompt("É um prazer conhece-lo(a) " + nome_cliente + 
", você poderia me informar seu sexo, se for masculino digite M, se for feminino F: ");
const valor_compras = parseFloat(prompt("Por fim eu preciso saber o valor de suas compras: "));
if (sexo == "M"){
    console.log(nome_cliente + " suas compras totalizaram R$ " + ((valor_compras * 5/100) + valor_compras).toFixed(2));
}else if (sexo == "F"){
    console.log(nome_cliente + " suas compras totalizaram R$ " + ((valor_compras * 13/100) + valor_compras).toFixed(2));
}
alert("Obrigado por comprar em nossa loja. Até a próxima!");
*/

/* 22) Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 
Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

const distancia = parseInt(prompt("Qual a distância em km que você deseja percorrer? "));
if (distancia <= 200){
    console.log("O valor total da sua viagem é de R$ " + (distancia * 0.50).toFixed(2));
}else{
    console.log("O valor total da sua viagem é de R$ " + (distancia * 0.45).toFixed(2));
}
*/
