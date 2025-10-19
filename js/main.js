const galeria = document.getElementById("galeria");

// Renderiza receitas locais
receitasLocais.forEach(r => {
  galeria.innerHTML += `
    <div class="card">
      <a href="detalhes.html?id=${r.id}&local=true">
        <img src="${r.imagem}" alt="${r.nome}">
        <h2>${r.nome}</h2>
      </a>
    </div>
  `;
});

// Busca receita da API TheMealDB
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(data => {
    const receita = data.meals[0];
    galeria.innerHTML += `
      <div class="card destaque">
        <a href="detalhes.html?id=${receita.idMeal}&local=false">
          <img src="${receita.strMealThumb}" alt="${receita.strMeal}">
          <h2>Sugestão do Dia: ${receita.strMeal}</h2>
        </a>
      </div>
    `;
  })
  .catch(() => {
    galeria.innerHTML += `<p>Erro ao carregar sugestão do dia.</p>`;
  });