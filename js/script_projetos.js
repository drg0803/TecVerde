// Acrescente ao script.js para cadastro de projetos
document.getElementById("formProjeto").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nomeProjeto").value;
  const desc = document.getElementById("descProjeto").value;

  if (nome && desc) {
    const ul = document.getElementById("projetos");
    const li = document.createElement("li");
    li.textContent = nome + ": " + desc;
    ul.appendChild(li);

    // Limpa campos
    document.getElementById("formProjeto").reset();
  }
});
