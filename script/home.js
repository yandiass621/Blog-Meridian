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