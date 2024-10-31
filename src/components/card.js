//для функций для работы с карточками(создание, лайк, удаление)
export {createCard, likeCard, deleteCard};
const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardItem, deleteCard, openPopupCard, likeCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const likeButton = card.querySelector('.card__like-button');
    const deleteButton = card.querySelector('.card__delete-button');
    
    cardImage.src = cardItem.link;
    cardImage.alt = cardItem.name;
    cardTitle.textContent = cardItem.name;
    likeButton.addEventListener('click', likeCard);
    deleteButton.addEventListener('click', () => deleteCard(card));
    cardImage.addEventListener('click', () => openPopupCard(cardItem.link, cardItem.name));

    return card;
}

function likeCard(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

function deleteCard(card) {
    card?.remove();
}