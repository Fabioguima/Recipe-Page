// Cria um objeto com os parâmetros da URL (ex: ?id=3&local=true)
const params = new URLSearchParams(window.location.search);

// Obtém o valor do parâmetro "id" da URL
const id = params.get("id");

// Verifica se o parâmetro "local" é igual a "true" (retorna true ou false)
const local = params.get("local") === "true";

// Seleciona o elemento HTML com o id "detalhes" (onde o conteúdo será exibido)
const container = document.getElementById("detalhes");

// Verifica se a receita deve ser carregada localmente ou da API
if (local) {
  // Busca nos dados locais (array receitasLocais) a receita com o mesmo id
  const receita = receitasLocais.find(r => r.id == id);

  // Chama a função que exibe a receita local na tela
  renderizar(receita);
} else {
  // Caso não seja local, faz a busca na API externa (TheMealDB)
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    // Converte a resposta da API para JSON
    .then(res => res.json())

    // Quando os dados chegam, chama a função que renderiza a receita da API
    .then(data => renderizarApi(data.meals[0]))

    // Se ocorrer erro (ex: sem conexão), exibe uma mensagem de erro
    .catch(() => container.innerHTML = "<p>Erro ao carregar receita.</p>");
}

// Função para exibir uma receita local na tela
function renderizar(r) {
  // Monta o HTML com os dados da receita local (nome, imagem, ingredientes e instruções)
  container.innerHTML = `
    <h1>${r.nome}</h1>
    <img src="${r.imagem}" alt="${r.nome}" class="receita-img">
    <h3>Ingredientes:</h3>
    <ul>${r.ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>Modo de preparo:</h3>
    <p>${r.instrucoes}</p>
  `;
}

// Função para exibir uma receita vinda da API TheMealDB
function renderizarApi(r) {
  // Cria um array vazio para armazenar os ingredientes
  const ingredientes = [];

  // A API fornece até 20 ingredientes, um por campo (strIngredient1, strIngredient2, etc.)
  for (let i = 1; i <= 20; i++) {
    // Se o ingrediente existir (campo não vazio)
    if (r[`strIngredient${i}`]) {
      // Adiciona ao array o ingrediente com sua medida (ex: "1 cup Flour")
      ingredientes.push(`${r[`strMeasure${i}`]} ${r[`strIngredient${i}`]}`);
    }
  }

  // Monta o HTML com os dados da receita da API
  container.innerHTML = `
    <h1>${r.strMeal}</h1>
    <img src="${r.strMealThumb}" alt="${r.strMeal}" class="receita-img">
    <h3>Ingredientes:</h3>
    <ul>${ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>Modo de preparo:</h3>
    <p>${r.strInstructions}</p>
  `;
}