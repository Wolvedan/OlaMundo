let nomeUsuario = prompt("Qual é o seu nome? (Pressione Cancelar se preferir não inserir um nome)");

if (nomeUsuario === null || nomeUsuario.trim() === "") {
    alert("Você escolheu não inserir um nome. Seja muito bem-vindo.");
} else {
    let elemento = document.querySelector("#nome-usuário");
    elemento.textContent = nomeUsuario;
}







