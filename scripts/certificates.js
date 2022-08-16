const btnMore = document.querySelector('.form__button--more');
const formItem = document.querySelector('#certificates');

let favoriteElement = [];

btnMore.addEventListener('click', moreCertificates);
formItem.addEventListener('click', FavoriteCertificates);

function FavoriteCertificates(event) {

    const heartElement = document.querySelectorAll('.favorite__icon');
    const iconTrash = document.querySelectorAll('.trash__icon');

    for (let i = 0; i < heartElement.length; i++) {

        if (event.target == iconTrash[i]) {
            removeinput(iconTrash[i]);
        }

        if (event.target == heartElement[i]) {

            const divFavorite = event.target.parentNode;
            const inputFavorite = event.target.previousElementSibling;

            if(inputFavorite.value == '') return

            if (divFavorite.classList.contains('favorite__input--active')) {
                renderRemoveFavorite(divFavorite);
            } else renderAddFavorite(divFavorite);

            if (favoriteElement.indexOf(divFavorite) == -1) {
                inputFavorite.classList.add('orderFav');
                favoriteElement.push(divFavorite);
                divFavorite.remove();
            }
            renderElement(inputFavorite.value);
        }
    }
}

function renderElement(value) {

    let lastItem = [...favoriteElement].pop();

    lastItem.firstChild.value = value;

    formItem.appendChild(lastItem);
}

function renderRemoveFavorite(div) {
    div.classList.toggle('favorite__input--active');
}

function renderAddFavorite(div) {
    div.classList.add('favorite__input--active');
}

function removeinput(element) {
    element.parentNode.remove();
}

function moreCertificates(event) {

    event.preventDefault();

    const inputCollection = document.querySelectorAll('.favorite__input');

    if (inputCollection.length <= 4) {

        const divElement = document.createElement('div');
        divElement.classList.add('favorite__input');
        document.querySelector('#certificates').appendChild(divElement);

        const inputElement = document.createElement('input');
        inputElement.classList.add('cert')
        inputElement.addEventListener('blur', save())
        inputElement.placeholder = 'https://www.linkedin.com/in/';
        inputElement.classList.add('certificates__input');

        const spanElementHeart = document.createElement('span');
        spanElementHeart.classList.add('favorite__icon');

        const spanElementTrash = document.createElement('span');
        spanElementTrash.classList.add('trash__icon');

        const inputCollection = document.querySelectorAll('.favorite__input');

        let lastElement = [...inputCollection].pop();

        lastElement.appendChild(inputElement);
        lastElement.appendChild(spanElementHeart);
        lastElement.appendChild(spanElementTrash);
    }
}