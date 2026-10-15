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


const buttonRecentes = document.querySelector('.recentes');
const buttonAntigos = document.querySelector('.antigos');
const articlesGrid = document.querySelector('.articles-grid');

function converterData(card) {
    const textoData = card.querySelector('.meta').textContent;
    const dataTexto = textoData.split('·')[0].trim();

    const [dia, mesTexto, ano] = dataTexto.split(' de ');

    const meses = {
        janeiro: 0,
        fevereiro: 1,
        março: 2,
        abril: 3,
        maio: 4,
        junho: 5,
        julho: 6,
        agosto: 7,
        setembro: 8,
        outubro: 9,
        novembro: 10,
        dezembro: 11
    };

    return new Date(
        Number(ano),
        meses[mesTexto.toLowerCase()],
        Number(dia)
    );
}

function ordenarArtigos(ordem) {
    const cards = Array.from(
        articlesGrid.querySelectorAll('.article-card')
    );

    cards.sort((a, b) => {
        const dataA = converterData(a);
        const dataB = converterData(b);

        return ordem === 'recentes'
            ? dataB - dataA
            : dataA - dataB;
    });

    cards.forEach(card => {
        articlesGrid.appendChild(card);
    });

    buttonRecentes.classList.toggle(
        'selecionado',
        ordem === 'recentes'
    );

    buttonAntigos.classList.toggle(
        'selecionado',
        ordem === 'antigos'
    );
}

buttonRecentes.addEventListener('click', () => {
    ordenarArtigos('recentes');
});

buttonAntigos.addEventListener('click', () => {
    ordenarArtigos('antigos');
});

// Ordenação inicial
ordenarArtigos('recentes');

// converterData() transforma a data em um objeto Date que o JavaScript consegue comparar.



// ordenarArtigos() organiza os cards sem recriá-los, preservando imagens, textos e links.



// classList.toggle() adiciona ou remove a classe selecionado conforme o botão clicado.



// No final, a página já abre ordenada do mais recente para o mais antigo.