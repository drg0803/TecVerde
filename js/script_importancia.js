// Você pode incluir depoimentos dinâmicos no script.js se quiser sortear depoimentos:

// script.js – trecho opcional para depoimento aleatório
const depoimentos = [
  {
    texto:
      '"Participar do projeto de energia limpa na escola me motivou a seguir carreira na área ambiental."',
    autor: "Ana, estudante do ensino médio",
  },
  {
    texto:
      '"Nossa comunidade economizou mais de 30% na conta de energia após instalar painéis solares coletivos."',
    autor: "Prof. Marcos, coordenador de projetos sustentáveis",
  },
  {
    texto:
      '"A tecnologia verde aproxima alunos e famílias, mostrando como pequenas atitudes fazem diferença.”',
    autor: "Beatriz, professora de ciências",
  },
];

function mostrarDepoimentoAleatorio() {
  const div = document.getElementById("depoimentos");
  const depo = depoimentos[Math.floor(Math.random() * depoimentos.length)];
  div.innerHTML = `
    <h3>Depoimento</h3>
    <div class="depoimento">
      <blockquote>${depo.texto}<br>
      <span>- ${depo.autor}</span></blockquote>
    </div>
  `;
}
// Chame mostrarDepoimentoAleatorio() se quiser ao carregar ou via botão
mostrarDepoimentoAleatorio();
