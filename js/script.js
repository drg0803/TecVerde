function mostrarDetalhes(tipo) {
  let detalhes = {
    energia: `
      <h4>Energia limpa</h4>
      <ul>
        <li><b>Solar</b>: Usa a luz do sol para gerar eletricidade de forma sustentável.</li>
        <li><b>Eólica</b>: Aproveita a força dos ventos para produzir energia sem emitir poluentes.</li>
      </ul>
      <p>Soluções que substituem combustíveis fósseis e minimizam impactos ambientais.</p>
    `,
    agricultura: `
      <h4>Agricultura tecnológica e sustentável</h4>
      <ul>
        <li>Monitoramento de plantações via sensores e drones.</li>
        <li>Uso consciente de água e fertilizantes.</li>
        <li>Redução do desperdício e aumento da produtividade.</li>
      </ul>
      <p>Ajuda a preservar o solo e os recursos naturais.</p>
    `,
    ecoarquitetura: `
      <h4>Ecoarquitetura</h4>
      <ul>
        <li>Construção com materiais recicláveis ou de baixo impacto.</li>
        <li>Projetos que aproveitam energia natural.</li>
        <li>Redução de desperdício e consumo de energia.</li>
      </ul>
      <p>Edificações mais eficientes e conectadas com o meio ambiente.</p>
    `,
    mobilidade: `
      <h4>Mobilidade elétrica</h4>
      <ul>
        <li>Veículos movidos a eletricidade, como carros e bicicletas.</li>
        <li>Menos emissão de gases poluentes.</li>
        <li>Tendência para cidades mais limpas e silenciosas.</li>
      </ul>
      <p>Alternativa sustentável aos motores à combustão tradicional.</p>
    `,
  };

  const detalhesDiv = document.getElementById("detalhesExemplo");
  detalhesDiv.innerHTML = detalhes[tipo];
  detalhesDiv.style.display = "block";
}
