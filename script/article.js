const params = new URLSearchParams(window.location.search);

const articleId = params.get('id');

const title = document.querySelector('#article-title');
const content = document.querySelector('#article-content');
const image = document.querySelector('#article-image');
const category = document.querySelector('#article-category');
const date = document.querySelector('#article-date');

async function loadArticle(){
    const response = await fetch(`/api/articles/${articleId}`);

    const article = await response.json();

    console.log(article);

    if (!response.ok) {
        title.textContent = 'Artigo não encontrado.';
        content.textContent = 'O artigo que você está procurando não existe.';
        return;
    }

    image.src = article.image;
    image.alt = article.title;

    category.textContent = article.category;

    title.textContent = article.title;

    date.textContent = article.date;

    content.innerHTML = article.content;
}


async function loadOtherArticles() {
    const container = document.querySelector('#other-articles-container');

    try {
        const response = await fetch('/api/articles');

        if (!response.ok) {
            throw new Error('Não foi possível carregar os artigos.');
        }

        const articles = await response.json();

        const currentArticleId = new URLSearchParams(
            window.location.search
        ).get('id');

        const otherArticles = articles
            .filter(article => article.id !== currentArticleId) //filter() continua excluindo o artigo atual.
            .sort(() => Math.random() - 0.5)    //sort(() => Math.random() - 0.5) embaralha a ordem dos artigos.
            .slice(0, 3);   //slice(0, 3) seleciona três artigos da lista embaralhada.

        otherArticles.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('other-article-card');

            card.innerHTML = `
                <img
                    class="other-article-image"
                    src="${article.image}"
                    alt="${article.title}"
                >

                <div class="other-article-content">
                    <span class="other-article-category">
                        ${article.category}
                    </span>

                    <h3 class="other-article-title">
                        ${article.title}
                    </h3>

                    <span class="other-article-date">
                        ${article.date}
                    </span>

                    <a
                        class="other-article-link"
                        href="article.html?id=${article.id}"
                    >
                        Ler artigo →
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar outros artigos:', error);
        container.textContent = 'Não foi possível carregar outros artigos.';
    }
}

loadOtherArticles();


loadArticle();


// Busca todos os artigos em /api/articles.



// Identifica o ID do artigo que está aberto.



// Exclui esse artigo da lista.



// Seleciona os três primeiros restantes.



// Cria os cards e coloca cada um no container do HTML.



// Adiciona um link para abrir o artigo correspondente.