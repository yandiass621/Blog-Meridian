const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const searchAction = document.querySelector('.search-action');
const searchClose = document.querySelector('.search-close');
searchButton.addEventListener('click', function() {

    searchInput.style.display = 'block';
    searchAction.style.display = 'block';
    searchClose.style.display = 'block';

    searchButton.style.display = 'none';

});
searchClose.addEventListener('click', function() {

    searchInput.style.display = 'none';
    searchAction.style.display = 'none';
    searchClose.style.display = 'none';

    searchButton.style.display = 'block';

});

const highlight = document.querySelector('.highlight');
const articleCards = document.querySelectorAll('.articles-grid .article-card');



function scrollSuaveParaResultados() {
    const highlight = document.querySelector('.highlight');
    const secaoArtigos = document.querySelector('.recent-articles');
    const termo = searchInput.value.trim().toLowerCase();

    if (!termo) return;

    if (highlight && highlight.style.display !== 'none') {
        const conteudoDestaque = highlight.textContent.toLowerCase();

        if (conteudoDestaque.includes(termo)) {
            highlight.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            return;
        }
    }

    if (secaoArtigos) {
        secaoArtigos.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}



function pesquisarHome() {
    const termo = searchInput.value.trim().toLowerCase();

    // Pesquisa no artigo em destaque
    if (highlight) {
        const conteudoDestaque = highlight.textContent.toLowerCase();
        highlight.style.display =
            conteudoDestaque.includes(termo) ? '' : 'none';
    }

    // Pesquisa nos cards dos artigos recentes
    articleCards.forEach(card => {
        const titulo = card.querySelector('h3')?.textContent || '';
        const resumo = card.querySelector('p')?.textContent || '';
        const conteudo = `${titulo} ${resumo}`.toLowerCase();

        card.style.display =
            conteudo.includes(termo) ? '' : 'none';
    });
}

// Botão Buscar
searchInput.addEventListener('input', () => {
    pesquisarHome();

    if (searchInput.value.trim() !== '') {
        scrollSuaveParaResultados();
    }
});

// Permite pesquisar pressionando Enter
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        pesquisarHome();
    }
});

// Atualiza os resultados enquanto digita
searchInput.addEventListener('input', pesquisarHome);

// Restaura os artigos ao fechar a busca
searchClose.addEventListener('click', () => {
    searchInput.value = '';
    pesquisarHome();
});
