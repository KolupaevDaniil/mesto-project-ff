//работа с модальными окнами
function openModal(popupType) {
    if (popupType) {
        popupType.addEventListener('click', handleClosePopup);
        document.addEventListener('keydown', handleClosePopup);
        popupType.classList.add('popup_is-opened');
    }
}

function handleClosePopup(evt) {
    if (evt.target.className === 'popup__close' || evt.target.classList.contains('popup') || evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closeModal(popup);
    }
}
    
function closeModal(popupType) { 
    popupType.removeEventListener('click', handleClosePopup);
    document.removeEventListener('keydown', handleClosePopup);
    popupType.classList.remove('popup_is-opened');   
}

export {openModal, closeModal};