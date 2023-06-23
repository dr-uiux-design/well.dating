/* ------------------- LETTER MESSAGE -------------------- */
const popup = document.querySelector('.popups');
const popupMessage = document.querySelector('.popup-message');
const popupMessageClose = document.querySelector('.popup-message__close');
const popupMessageBtn = document.querySelector('.popup-message__btn');
const btnFixed = document.querySelector('.btn-view-message');

// проверяем, было ли уже показано popup-message
if (!localStorage.getItem('popupShown')) {
	// если нет, то показываем его через 3 секунды
	setTimeout(() => {
		popupMessage.classList.add('is-active');
		localStorage.setItem('popupShown', true);
	}, 3000);
} else {
	// если да, то скрываем его
	popupMessage.classList.add('is-hide');
	// показываем btn-view-message
	btnFixed.classList.add('is-active');
}

// добавляем обработчик клика на кнопку закрытия окна
const closeBtn = popup.querySelector('.popup-message__close');
closeBtn.addEventListener('click', () => {
	popup.classList.add('is-hide');
});

// Закрытие .popup-message и вызов кнопки .btn-view-message
popupMessageClose.addEventListener('click', () => {
	if (popupMessage.classList.contains('is-active')) {
		popupMessage.classList.remove('is-active');
		btnFixed.classList.add('is-active');
	}
});

// Показ .popup-message при клике на кнопку .btn-view-message
btnFixed.addEventListener('click', () => {
	popupMessage.classList.add('is-active');
	btnFixed.classList.remove('is-active');
});


/* ------------------- POPUPS FORMS -------------------- */
const popupsForms = document.querySelector('.popups-forms');
const popupsFormsClose = document.querySelector('.popups__close');
const formLetter = document.querySelector('#formLetter');
const formLetterEmail = document.querySelector('#formLetterEmail');
const LetterSend = document.querySelector('#LetterSend');
const LetterSuccess = document.querySelector('#LetterSuccess');
const btnEmailMe = document.querySelector('.btn-emailme');
const btnEmailMeAnchor = document.querySelector('#pb-menu');

popupMessageBtn.addEventListener('click', () => {
	popupsForms.classList.remove('is-hide');
	popupsForms.classList.add('is-active');
	popupMessage.classList.remove('is-active');
	document.body.style.overflow = 'hidden';
	btnEmailMeAnchor.scrollIntoView({ behavior: 'smooth' });
});

// Закрытие .popup-message и вызов кнопки .btn-view-message
popupsFormsClose.addEventListener('click', () => {
	if (popupsForms.classList.contains('is-active')) {
		popupsForms.classList.remove('is-active');
		popupsForms.classList.add('is-hide');
		btnFixed.classList.add('is-active');
		document.body.style.overflow = 'auto';
	}
});

// Открытие popups-forms по клику на .btn-emailme
btnEmailMe.addEventListener('click', () => {
	popupsForms.classList.add('is-active');
	btnFixed.classList.remove('is-active');
	document.body.style.overflow = 'hidden';
});