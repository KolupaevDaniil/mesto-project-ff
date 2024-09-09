// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placeList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard (cardItem, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardImage.src = cardItem.link;
    cardImage.alt = cardItem.name;
    cardTitle.textContent = cardItem.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', function () {
        deleteCard(cardElement);
    });
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach( function(cardItem) {
    placeList.append(createCard(cardItem, deleteCard));
});