// function saudacao (nome, periodo) {
//     alert(`Olá ${nome}, boa ${periodo}`)
// }

// saudacao ("Carol", "noite")
// saudacao ("Tiago", "dia")

// tudo que estiver dentro do bloco será executado ao ser chamada "saudacao".
// toda vez que chamar a variavel saudacao, ela vai exibir isso 

// function saudacao (nome, periodo = "dia") {
//     return(`Olá ${nome}, boa ${periodo}`)
// }
// const fraseSaudacao = saudacao("Bruno");

// return devolve uma coisa de cada vez. RETURN == usado para if, break. Ele mata o bloco dele.




// Crie uma função que receba 2 numeros e retorne o maior deles.Se forem iguais, retorne a mensagem 'São iguais'

// Entrada
let numero1 = prompt ("Insira um nº: "); 
let numero2 = prompt ("Insira outro nº ");
// // variavel===numero1

// // Chamada da função -- é esta abaixo:
number(numero1, numero2)

function number (n1, n2) {
    // validação
    if (n1===n2) {
        alert(`São iguais`)
    }
// // parametro aqui é o n1 === parametro é quase uma variavel interna da função
    else if (n1 > n2) {
        alert(`${n1}`)

    }
    if (n1 < n2) {
        alert(`${n2}`)

    }
}



// De outra forma:
// function number (n1, n2) {
//     // validação
// if (n1===n2) {
//     alert(`São iguais`)
// }

// if (n1 > n2) {
//         alert(`${n1}`)

// }
// if (n1 < n2) {
//         alert(`${n2}`)

// }

// }

// number (8,10)





// Fazer função que receba um texto, limpe os espaços em branco do início  e fim e retorna este texto maiúsculo. 

// Entrada
let texto = prompt ("Insira o texto: ")
console.log(texto);

// chamar a função + mostrando o texto  - EXIBIR O RETORNO DA FUNÇÃO 

alert(limparEformatar(texto))

function limparEformatar(textao) {
    const textoSemEspaco = textao.trim ()
    const textoMaiusculo = textoSemEspaco.toUpperCase()
    return textoMaiusculo
}

// // const === PQ variavel é contínua
// return === vai retornar para o SVGFEDisplacementMapElement, não para o usuario