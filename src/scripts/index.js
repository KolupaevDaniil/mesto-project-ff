import '../pages/index.css';
import {initialCards} from './cards';
import {createCard, likeCard, deleteCard} from '../components/card';
import {openModal} from '../components/modal';

const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');
const popupProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputDescription = popupProfile.querySelector('.popup__input_type_description');
const profileTitle = content.querySelector('.profile__title');
const profileDescription = content.querySelector('.profile__description');

const profileEditButton = document.querySelector('.profile__edit-button');
const newCardAddButton = document.querySelector('.profile__add-button');

initialCards.forEach(cardItem => {
    placesList.append(createCard(cardItem, deleteCard, openPopupCard, likeCard));
}); 

export function openPopupCard(link, name) {
    popupImage.querySelector('.popup__image').src = link;
    popupImage.querySelector('.popup__image').alt = name;
    popupImage.querySelector('.popup__caption').textContent = name;
    openModal(popupImage);
}

function openProfilePopup() {
    inputName.value = profileTitle.textContent;
    inputDescription.value = profileDescription.textContent;
    openModal(popupProfile);
}
profileEditButton.addEventListener('click', openProfilePopup);

function openNewCardPopup() {
    openModal(popupNewCard);
}
newCardAddButton.addEventListener('click', openNewCardPopup);

function handleProfileSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    popupProfile.classList.remove('popup_is-opened');
}
popupProfile.addEventListener('submit', handleProfileSubmit);

function handlerNewCardSubmit(evt) {
    evt.preventDefault();
    const cardName = popupNewCard.querySelector('.popup__input_type_card-name');
    const cardLink = popupNewCard.querySelector('.popup__input_type_url');
    const newCardName = cardName.value;
    const newCardLink = cardLink.value;
    placesList.prepend(createCard(
        {name: newCardName, link: newCardLink},
        deleteCard,
        openPopupCard,
        likeCard));
    cardName.value = '';
    cardLink.value = '';
    popupNewCard.classList.remove('popup_is-opened');
}
popupNewCard.addEventListener('submit', handlerNewCardSubmit);