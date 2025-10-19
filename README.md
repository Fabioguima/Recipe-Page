# 🍰 Livro de Receitas Online

Um site interativo que apresenta uma **galeria de receitas** com imagens, ingredientes e modo de preparo.  
Além disso, exibe uma **“sugestão do dia”** vinda de uma API externa (TheMealDB), tornando o conteúdo sempre novo.

---

## 🌐 Visão Geral

- A página inicial (`index.html`) mostra várias receitas locais e uma sugestão do dia.
- Ao clicar em uma receita, o usuário é levado à página de **detalhes** (`detalhes.html`), que exibe as informações completas.
- Os dados locais estão no arquivo `dados.js`, e os scripts `main.js` e `detalhes.js` cuidam da lógica de exibição e integração com a API.

---

## 🧱 Estrutura do Projeto

```
📂 projeto-receitas
├── index.html          # Página inicial com galeria de receitas
├── detalhes.html       # Página com detalhes de cada receita
├── css/
│   └── style.css       # Estilos e layout responsivo
├── js/
│   ├── dados.js        # Dados locais das receitas (array de objetos)
│   ├── main.js         # Lógica da galeria e sugestão do dia
│   └── detalhes.js     # Renderização da página de detalhes
```

---

## ⚙️ Funcionalidades

✅ Exibição dinâmica de receitas locais  
🌎 Consumo da API **TheMealDB** para mostrar uma receita aleatória  
📸 Exibição de imagem, ingredientes e modo de preparo  
📱 Layout **responsivo** (CSS Grid e media queries)  
🔁 Navegação fluida entre galeria e detalhes

---

## 💻 Tecnologias Utilizadas

- **HTML5** – estrutura do site
- **CSS3** – estilização e responsividade
- **JavaScript (ES6)** – lógica e manipulação do DOM
- **TheMealDB API** – fonte externa de receitas

---

## 🚀 Como Executar

1. Faça o download do projeto ou clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/livro-receitas.git
   ```

2. Abra o arquivo `index.html` em seu navegador.

3. Clique em uma receita para visualizar os detalhes ou explore a sugestão do dia.

---

## 🔗 API Utilizada

**TheMealDB**  
Receita aleatória:

```
https://www.themealdb.com/api/json/v1/1/random.php
```

Detalhes de receita:

```
https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
```

---

## 👨‍🍳 Autor

**Fabio Guimarães**  
📧 Contato: fguimaraesmielczarski@gmail.com

---

## 🪪 Licença

Distribuído sob a licença **MIT**.  
Sinta-se livre para usar, modificar e compartilhar.

---
