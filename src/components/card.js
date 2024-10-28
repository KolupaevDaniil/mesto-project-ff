//для функций для работы с карточками(создание, лайк, удаление)
import { openModal } from "./modal";
export {createCard, openPopupCard, likeCard, deleteCard};
const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardItem, deleteCard, openPopupCard, likeCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    
    cardImage.src = cardItem.link;
    cardImage.alt = cardItem.name;
    card.querySelector('.card__title').textContent = cardItem.name;

    card.addEventListener('click', (evt) => {
        if (evt.target.className === 'card__image')
            openPopupCard(cardItem.link, cardItem.name);

        if (evt.target.classList.contains('card__like-button'))
            likeCard(evt);

        if (evt.target.className === 'card__delete-button')
            deleteCard(card);
    });
    return card;
}


function openPopupCard(link, name) {
    const popupImage = document.querySelector('.popup_type_image');
    popupImage.querySelector('.popup__image').src = link;
    popupImage.querySelector('.popup__image').alt = name;
    popupImage.querySelector('.popup__caption').textContent = name;
    openModal(popupImage);
}

function likeCard(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

function deleteCard(card) {
    if (card)
        card.remove();
}