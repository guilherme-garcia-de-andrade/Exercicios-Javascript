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

const nota1 = parseFloat(prompt("Qual é a primeira nota? "));
const nota2 = parseFloat(prompt("Qual é a segunda nota? "));
mediaFinal = ((nota1 + nota2) / 2).toFixed(2);

if (mediaFinal <= 4.9){
    console.log("Sua média final é: " + mediaFinal + " e você está Reprovado!");
}else if (mediaFinal >= 5.0 && mediaFinal <= 6.9){
    console.log("Sua média final é: " + mediaFinal + " e você está de Recuperação!");
}else{
    console.log("Sua média final é: " + mediaFinal + " e você está Aprovado!");
}
*/

/* 25) Faça um programa que leia a largura e o comprimento de um terreno retangular, 
calculando e mostrando a sua área em m². O programa também devemostrar a classificação desse terreno,
de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP

let largura_terreno = parseFloat(prompt("Qual é a largura do seu terreno? "));
let comprimento_terreno = parseFloat(prompt("E qual é o comprimento do seu terreno? "));
let metrosQuadrados = largura_terreno * comprimento_terreno;

if (metrosQuadrados < 100){
    console.log("A área total de seu terreno é de " + metrosQuadrados + "m²" + 
    ". Ele é classificado como TERRENO POPULAR.");
}else if (metrosQuadrados >= 100 && metrosQuadrados <= 500){
    console.log("A área total de seu terreno é de " + metrosQuadrados + "m²" + 
    ". Ele é classificado como TERRENO MASTER.");
}else if (metrosQuadrados > 500){
    console.log("A área total de seu terreno é de " + metrosQuadrados + "m²" + 
    ". Ele é classificado como TERRENO VIP.");
}else{
    console.log("Você digitou alguma informação inválida.");
}
*/

/* 26) Desenvolva um programa que leia o nome de um funcionário, seu salário, 
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%

const nomeFuncionario = prompt("Funcionário, por favor informe seu nome: ");
const salarioFuncionario = parseFloat(prompt(nomeFuncionario + ", qual é o seu salário atual? "));
const anosEmpresa = parseInt(prompt(nomeFuncionario + ", por fim eu preciso saber há quantos anos você trabalha na empresa: "));

if (anosEmpresa < 3){
    console.log(nomeFuncionario + " seu novo salário é de R$ " + 
    ((salarioFuncionario * 3/100) + salarioFuncionario).toFixed(2) + ".");
}else if (anosEmpresa >= 3 && anosEmpresa < 10){
    console.log(nomeFuncionario + " seu novo salário é de R$ " + 
    ((salarioFuncionario * 12.5/100) + salarioFuncionario).toFixed(2) + ".");
}else{
    console.log(nomeFuncionario + " seu novo salário é de R$ " + 
    ((salarioFuncionario * 20/100) + salarioFuncionario).toFixed(2) + ".");
}
*/

/* 
[DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura) - falta apenas resolver o settimeout - o resto ta ok

let jogador1 = prompt("Jogue Pedra, Papel ou Tesoura");
let computador = Math.floor(Math.random() * 3); // irá sortear um numero entre 0 e 2
if (computador == 0){
    computador = "pedra";
}else if(computador == 1){
    computador = "papel";    
}else if (computador == 2){
    computador = "tesoura";
} console.log("O computador escolheu " + computador);

setTimeout(function(){
    console.log("Aguarde enquanto calculamos os resultados...");
  }, 5000)
  
if (jogador1 == "tesoura" && computador == "tesoura"){
    console.log("Empatou!");
}else if (jogador1 == "tesoura" && computador == "pedra"){
    console.log("O computador ganhou, pedra quebra tesoura!")
}else if (jogador1 == "tesoura" && computador == "papel"){
    console.log("O jogador ganhou, tesoura corta papel!");
}else if (jogador1 == "pedra" && computador == "pedra"){
    console.log("Empatou!");
}else if (jogador1 == "pedra" && computador == "papel"){
    console.log("O computador ganhou, papel embrulha pedra!");
}else if (jogador1 == "pedra" && computador == "tesoura"){
    console.log("O jogador ganhou, quebra tesoura!");
}else if (jogador1 == "papel" && computador == "papel"){
    console.log("Empatou!");
}else if (jogador1 == "papel" && computador == "tesoura"){
    console.log("O computador ganhou, tesoura corta papel!");
}else if (jogador1 == "papel" && computador == "pedra"){
    console.log("O jogador ganhou, papel embrulha pedra!");
}else{
    console.log("Você digitou alguma informação inválida");
}

setTimeout(() => {
    console.log("Finalizando o jogo...")    
}, 5000);

console.log("Obrigado por jogar!")
*/


/* [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado. - TERMINAR 
const numero_sorteado = Math.floor(Math.random() * 5);
const numero_usuario = parseInt(prompt("Olá, tente adivinhar o numero sorteado de 1 a 5: "));
console.log("O número sorteado foi: " + numero_sorteado);
i = numero_sorteado;

function acertarNumero(){
    while (numero_usuario != i){
        console.log("Você não acertou o número sorteado");
        i++;
    }    
}
acertarNumero();

if(numero_usuario == numero_sorteado){
    console.log("Voce acertou!");
}else if(numero_usuario != numero_sorteado && numero_usuario < 5){
    console.log("Você errou!");
}else{
    console.log("Você digitou um número inválido!");
}
*/

/* 27) Escreva um programa para aprovar ou não o empréstimo bancário para a compra de uma casa. 
O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo
será negado. 
let valorCasa = parseFloat(prompt("Olá, por favor informe o valor da casa: "));
let salarioComprador = parseFloat(prompt("E qual o seu salário? "));
let anosPagamento = parseInt(prompt("Em quantos anos será paga? ")) * 12;
const valorPrestacao = (valorCasa / anosPagamento).toFixed(2);
console.log("O valor da prestação mensal é de: R$ " + valorPrestacao);

if(valorPrestacao > salarioComprador * 30/100){
    console.log("O empréstimo foi negado!");
}else{
    console.log("O empréstimo foi concedido!");
}
*/

/* 28) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o indivíduo dentro de certas faixas.
- abaixo de 18.5: Abaixo do peso
- entre 18.5 e 25: Peso ideal
- entre 25 e 30: Sobrepeso
- entre 30 e 40: Obesidade
- acima de 40: Obseidade mórbida
const peso_usuario = parseInt(prompt("Informe o seu peso: "));
const altura_usuario = parseFloat(prompt("Agora informe sua altura no formato x.xx: "));
const IMC = (peso_usuario / Math.pow(altura_usuario, 2)).toFixed(1);
console.log("O seu IMC é de: " + IMC);
    if(IMC < 18.5){
        console.log("Você está abaixo do peso.");
    }else if(IMC >= 18.5 && IMC < 25){
        console.log("Você está no peso ideal.");
    }else if(IMC >= 25 && IMC < 30){
        console.log("Você está com sobrepeso.");
    }else if(IMC >= 30 && IMC < 40){
        console.log("Você está com obesidade.");
    }else{
        console.log("Você está com obesidade mórbida.");
    }
*/

/* 29) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. 
O aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para carro de luxo.
Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado 
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. 
No final mostre o preço a ser pago de acordo com a tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km 
let nomeCliente = prompt("Olá, seja bem-vindo(a) a nossa locadora, por favor informe seu nome: ");
let diasAluguel = parseInt(prompt(nomeCliente + ", eu preciso saber por quantos dias voce alugou o carro: "));
let kmPercorridos = parseFloat(prompt("Legal " + nomeCliente + ", você pode me informar também a quantidade de km que voce percorreu? "));
let tipoVeiculo = prompt("Estamos acabando... Eu preciso saber qual o tipo de veículo que voce alugou, caso seja um veículo popular digite P, se for um veículo de luxo digite L: ");
let resumoLocacao = console.log(nomeCliente + " você alugou o veículo por " + diasAluguel 
+ " dias e percorreu um total de " + kmPercorridos + " km.");

if(tipoVeiculo == "P" && kmPercorridos <= 100){
    console.log("O valor total da sua locação é de R$ " + ((diasAluguel * 90) + (kmPercorridos * 0.20)).toFixed(2));
}else if (tipoVeiculo == "P" && kmPercorridos > 100){
    console.log("O valor total da sua locação é de R$ " + ((diasAluguel * 90) + (kmPercorridos * 0.10)).toFixed(2));
}else if(tipoVeiculo == "L" && kmPercorridos <= 100){
    console.log("O valor total da sua locação é de R$ " + ((diasAluguel * 150) + (kmPercorridos * 0.30)).toFixed(2));    
}else if(tipoVeiculo == "L" && kmPercorridos > 100){
    console.log("O valor total da sua locação é de R$ " + ((diasAluguel * 150) + (kmPercorridos * 0.25)).toFixed(2));
}else{
    console.log("Você digitou alguma informação incorreta.")
}
console.log(nomeCliente + " obrigado por alugar seu veículo com a gente, volte sempre!");
*/

/* 30)Um programa de vida saudável quer dar pontos atividades físicas que podem ser trocados por dinheiro.
O sistema funciona assim:
- Cada hora de atividade física no mês vale pontos
- até 10h de atividade no mês: ganha 2 pontos por hora
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
- acima de 20h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
const horas_atividade = parseInt(prompt("Quantas horas de atividades físicas você fez nesse mês? "));
const ate10 = ((horas_atividade * 2) * 0.05).toFixed(2);
const ate20 = ((horas_atividade * 5)* 0.05).toFixed(2);
const mais20 = ((horas_atividade * 10)* 0.05).toFixed(2);
    if (horas_atividade < 10){
        console.log("Voce ganhou um total de " + (horas_atividade * 2) + " pontos." 
        + " Com isso você irá faturar R$ " + ate10);
    }else if (horas_atividade >= 10 && horas_atividade < 20){
        console.log("Voce ganhou um total de " + (horas_atividade * 5) + " pontos."
        + " Com isso você irá faturar R$ " + ate20);
    }else if (horas_atividade > 20){
        console.log("Voce ganhou um total de " + (horas_atividade * 10) + " pontos."
        + " Com isso você irá faturar R$ " + mais20);
    }else{
        alert("Você digitou alguma informação incorreta!");
    }
*/

/* 31) Uma empresa precisa reajustar o salário dos seus funcionários, dando um aumento de acordo com alguns fatores.
Faça um programa que leia o salário atual, o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25% 
const nome_empregado = prompt("Olá funcionário, por favor informe o seu nome: ");
const salario_atual = parseFloat(prompt("Prazer " + nome_empregado + ", preciso saber qual o seu salário atual? "));
const genero_funcionario = prompt("Agora eu preciso saber qual o seu sexo, se masculino digite 1, se feminino digite 2: ");
const anos_empresa = parseInt(prompt(nome_empregado + " há quantos anos você trabalha na empresa? "));
    if(genero_funcionario == "2" && anos_empresa < 15){
        console.log("Você ganhou um aumento de 5%, e seu novo salário e de R$ " + ((salario_atual * 5/100) + salario_atual).toFixed(2));
    }else if(genero_funcionario == "2" && anos_empresa >= 15 && anos_empresa < 20){
        console.log("Você ganhou um aumento de 12%, e seu novo salário e de R$ " + ((salario_atual * 12/100) + salario_atual).toFixed(2));
    }else if(genero_funcionario == "2" && anos_empresa > 20){
        console.log("Você ganhou um aumento de 23%, e seu novo salário e de R$ " + ((salario_atual * 23/100) + salario_atual).toFixed(2));
    }else if(genero_funcionario == "1" && anos_empresa < 20){
        console.log("Você ganhou um aumento de 3%, e seu novo salário e de R$ " + ((salario_atual * 3/100) + salario_atual).toFixed(2));
    }else if(genero_funcionario == "1" && anos_empresa >= 20 && anos_empresa < 30){
        console.log("Você ganhou um aumento de 13%, e seu novo salário e de R$ " + ((salario_atual * 13/100) + salario_atual).toFixed(2));
    }else if(genero_funcionario == "1" && anos_empresa > 30){
        console.log("Você ganhou um aumento de 25%, e seu novo salário e de R$ " + ((salario_atual * 25/100) + salario_atual).toFixed(2));
    }

    setTimeout(function(){
        console.log("Obrigado por participar, esperamos que você fique feliz com o aumento salarial!");
    },3000);
*/
