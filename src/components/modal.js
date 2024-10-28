//работа с модальными окнами
//реализовать функции openModal, closeModal
//showPopup
function openModal(popupType) {
    if (popupType) {
        popupType.addEventListener('click', closeModal);
        document.addEventListener('keydown', closeModal);
        popupType.classList.add('popup_is-opened');
    }
}

//hidePopup
function closeModal(evt) {
    if (evt.target.className === 'popup__close' || evt.target.classList.contains('popup') || evt.key === 'Escape') {
        document.querySelectorAll('.popup').forEach(popup => {
            if (popup.classList.contains('popup_is-opened')) {
                popup.classList.remove('popup_is-opened');
                popup.removeEventListener('click', closeModal);
                document.removeEventListener('keydown', closeModal);
            }
        });
    }
}

export {openModal};