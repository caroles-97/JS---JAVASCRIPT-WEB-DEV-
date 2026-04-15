// Programa que recebe o login e senha do usuario:1234 
// ENTRADA
let nome = prompt ("Login: ");
let senha = prompt ("Digite sua senha: ");



// VALIDAÇÃO
if (nome === null || senha === null){
    alert(`Usuário ou senha incorretos`)
}

// Se for vazio: 
if (nome === "" || senha === ""){
    alert(`Usuário ou senha incorretos`)
}


// PROCESSAMENTO
if (nome === "1324" && senha === "1234"){
    alert ("Login efetuado com sucesso!");
    window.location.href = "homeprogram.html"
}
// window.location.href === rediciona para a outra página
else{
    alert("Usuário ou senha incorretos!!!")
}