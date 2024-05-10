// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento span com o ID "nome-usuário"
    var nomeUsuarioElemento = document.getElementById("nome-usuário");
    
    // Pede ao usuário que insira seu nome
    var nomeUsuario = prompt("Por favor, insira seu nome:");
    
    // Verifica se o usuário inseriu um nome
    if (nomeUsuario !== null && nomeUsuario !== "") {
        // Atualiza o conteúdo do elemento com o nome do usuário
        nomeUsuarioElemento.textContent = nomeUsuario;
    } else {
        // Se o usuário cancelar ou não inserir um nome, exibe uma mensagem padrão
        nomeUsuarioElemento.textContent = "Fulano";
    }
});






