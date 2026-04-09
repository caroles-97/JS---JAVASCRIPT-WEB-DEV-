// fazer um programa que pergunta o nome2, idade e curso e dps apresenta um alert com a frase: "Olá, meu nome é ____, tenho __ anos e estudo ___ na FIAP"

// let nome = prompt("Qual o seu nome?");
// let idade = prompt("Qual sua idade?");
// let curso = prompt ("Qual curso está estudando?");

// alert (`Olá, meu nome é  ${nome}, tenho  ${idade} e estudo ${curso} na FIAP`);



// FAÇA UM ALGORITMO PARA CONVERTER METROS EM centimetros.

// ENTRADA
// let distancia = prompt ("Qual a distância que você quer converter?");

// PROCESSAMENTO
// let centimetros = distancia * 100

// SAÍDA
// alert(`A distancia de ${distancia} metros é ${centimetros} centimetros.`);



// CALCULANDO O IMC: 

// let peso = prompt ("Qual o seu peso?");
// let alt = prompt ("Qual sua altura em metros?");
// let imc = peso / (alt * alt );

// // SAÍDA: 
// alert(`Levando em consideração o peso ${peso}kg e sua altura de ${alt} metros, seu IMC é de ${imc}.`);




// Faça um programa que peça 1 nº para o usuário, depois outro nº e ao final, exiba em um alert a soma desses 2 nºs

// let n2 = parseFloat (prompt ("Digite outro número: "));
// let n1 = parseFloat (prompt ("Digite um número: "));

// let total = n1 + n2 

// alert(`A soma dos dois números indicados é de ${total}.`);


// ENTRADA
let n2 = parseFloat (prompt ("Digite outro número: "));
let n1 = parseFloat (prompt ("Digite um número: "));
let operacao = prompt ("QUal operação você quer fazer? (+,-,/,*)");


VALIDAÇÃO

if (n1 === null || n2 === null || operacao === null){
    alert (`Não foi possível efetuar a operação.`)
}

// Se n1 for vazio etc:
if (n1 === "" || n2 === "" || operacao === """){
    alert (`Preencha corretamente.`)
}

// isNaN tenta converter para nº e informa caso não conseguiu
if(isNaN(n1) || isNaN(n2)) {
    alert (`Digite um número`)
}


let total;
// Escopo global  todo mundo consegue acessar ele 

// PROCESSAMENTO

if (operacao === "+") {
    total = n1 + n2
    alert(`O cálculo dos dois números indicados é de ${total}.`);
}

else if(operacao ==="-") {
    total = n1 - n2
    alert(`O cálculo dos dois números indicados é de ${total}.`);
}

// Regras para fazer a /
else if(operacao ==="/") {
    if(n2 !== 0) {
    total = n1 / n2
    alert(`O cálculo dos dois números indicados é de ${total}.`);
    }
    else {
        alert ("Não pode dividir por zero");
        }
}

else if(operacao ==="*") {
        total = n1 * n2
        alert(`O cálculo dos dois números indicados é de ${total}.`);
    }

else{
    alert("Não vai rolar!")
}

