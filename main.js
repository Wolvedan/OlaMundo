let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuário");

while (nomeUsuario === null || nomeUsuario.trim() === "") {
    nomeUsuario = prompt("Qual é o seu nome?");
    if (nomeUsuario === null || nomeUsuario.trim() === "") {
        alert("Por favor, insira um nome válido.");
    }
}

elemento.textContent = nomeUsuario !== null ? nomeUsuario : 'Seja muito bem-vindo.';







