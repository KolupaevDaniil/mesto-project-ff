import '../pages/index.css';
import {initialCards} from './cards';
import {createCard, openPopupCard, likeCard, deleteCard} from '../components/card';
import {openModal} from '../components/modal';

const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');
const popupProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputDescription = popupProfile.querySelector('.popup__input_type_description');
const profileTitle = content.querySelector('.profile__title');
const profileDescription = content.querySelector('.profile__description');

initialCards.forEach(cardItem => {
    placesList.append(createCard(cardItem, deleteCard, openPopupCard, likeCard));
}); 

function handlePageSectionButton(evt) {
    if (evt.target.className === "profile__edit-button") {
        inputName.value = profileTitle.textContent;
        inputDescription.value = profileDescription.textContent;
        openModal(popupProfile);
    }
    if (evt.target.className === "profile__add-button")
        openModal(popupNewCard);
}
document.addEventListener('click', handlePageSectionButton);

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