const prompt = require("prompt-sync")();

//1) Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".

console.log("O primeiro programa a gente nunca esquece!");

//2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o CEP na terceira e o telefone na quarta.

const prompt = require("prompt-sync")();

console.log("Digite seu nome completo: ");
let nome = prompt();

console.log("Digite seu endereço: ");
let endereco = prompt();

console.log("Digite seu CEP: ");
let cep = prompt();

console.log("Digite seu telefone? ");
let telefone = +prompt();

console.clear();
console.log(nome);
console.log(endereco);
console.log(cep);
console.log(telefone);

//3) Letra de Música - Faça um programa que mostre na tela uma letra de música que você gosta.

console.log(
  "Eu sonho mais alto que drones. / Combustível do meu tipo? A fome. /Pra arregaçar como um ciclone. / Pra que amanhã não seja só um ontem. /Com um novo nome "
);

//7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que
// custou R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço
//que é de 10%. Por fim defina uma variável que será responsável pelo cálculo do
//valor total da conta e exiba-o no console com a seguinte formatação: R$99.99
//(valor com duas casas decimais).

let valor = 42.54;
let taxadeservico = 0.1;
let porcentagem = valor * taxadeservico;
let valortotal = porcentagem + valor;

let total = valortotal.toFixed(2); //o .toFixed é o número de casas decimais

console.log(total);

//8) Qual o valor do troco? - Crie um programa que calcule o troco de uma
//compra no valor de R$100,98 e que foi paga com R$150,00.
// O valor do troco deve ser exibido no console.

let troco = 150.0 - 100.98;
Math.round(troco); //o Math.round() arrendonda um número
let total2 = troco.toFixed(2);
console.log(total2);

//9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário
//e converta esse valor, para dólar.

let real = +prompt("Digite um valor em real: ");
let conversor = real * 5.41;
console.log(`O valor de R$ ${real} em dolár é ${conversor} USD`);

// AULA

let string = "Blue EdTech";
let numberInt = 10;
let numberFloat = 10.5;
let boolean = true;

console.log(string);
console.log(numberInt);
console.log(numberFloat);
console.log(boolean);
console.log();

// Exibindo os tipos das variáveis
console.log(typeof string);
console.log(typeof numberInt);
console.log(typeof numberFloat);
console.log(typeof boolean);

//operadores matemáticos

let nome = prompt("Qual é o seu nome? ");
console.log("Olá", nome);

let num1 = +prompt("Digite um número: ");
let num2 = +prompt("Digite outro número: ");

let subtracao = num1 - num2;

console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
console.log("Multiplicação:", num1, "*", num2, "=", num1 * num2); // Em JavaScript usamos um * para multiplicação
console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Resto da divisão de ${num1}/${num2}: ${num1 % num2}`);
console.log(`Resultado de ${num1} elevado a ${num2}: ${num1 ** num2}`);

let resultado = num1 / num2;
// Transformando o número num inteiro com parseInt
let resultadoInt = parseInt(resultado);
console.log("Resultado em número inteiro:", resultadoInt);
//

console.log();
