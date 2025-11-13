// Acrescente ao script.js
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("contatoStatus").textContent =
    "Mensagem enviada! Agradecemos o contato.";
  document.getElementById("formContato").reset();
});

document
  .getElementById("formNewsletter")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("newsletterStatus").textContent =
      "Inscrição recebida! Em breve você receberá nossos conteúdos.";
    document.getElementById("formNewsletter").reset();
  });
