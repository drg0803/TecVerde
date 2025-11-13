/*// Função para abrir o modal do quiz
function abrirQuiz() {
  const modal = document.getElementById("quizModal");
  modal.style.display = "block";
  // Limpar resultado e formulário ao abrir
  document.getElementById("resultadoQuiz").innerHTML = "";
  document.getElementById("quizForm").reset();
}

// Função para fechar o modal do quiz
function fecharQuiz() {
  const modal = document.getElementById("quizModal");
  modal.style.display = "none";
}

// Função para processar o envio do quiz
document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // evitar envio padrão do form

    // Obter respostas selecionadas
    const resposta1 = this.q1.value;
    const resposta2 = this.q2.value;

    // Avaliar respostas
    let pontos = 0;
    if (resposta1 === "b") pontos++; // Jogar lixo no chão NÃO é sustentável
    if (resposta2 === "b") pontos++; // Solar é energia limpa

    // Criar mensagem de resultado
    let mensagem = "";
    if (pontos === 2) {
      mensagem = "Parabéns! Você acertou todas as respostas.";
    } else if (pontos === 1) {
      mensagem = "Você acertou uma resposta. Continue aprendendo!";
    } else {
      mensagem = "Que tal tentar novamente para aprender mais?";
    }

    // Exibir resultado no modal
    document.getElementById("resultadoQuiz").innerText = mensagem;
  });
  */
