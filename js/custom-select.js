// находим все наши кастомные селекты на странице
const customSelects = document.querySelectorAll('.custom-select');
// переменная для хранения текущтого селекта
let currentSelect = null;

// функция для закрытия всех открытых селектов
const closeAllSelects = () => {
	customSelects.forEach(select => {
		select.classList.remove('active');
	});
	currentSelect = null;
};

// добавляем обработчик клика на документ
document.addEventListener('click', event => {
	const target = event.target;

	// проверяем, что кликнули вне области нашего кастомного селекта
	if (!target.closest('.custom-select') && !target.matches('.custom-select, .custom-select *')) {
		closeAllSelects();
	}
});

// добавляем обработчики на все кастомные селекты
customSelects.forEach(select => {
	const selectInput = select.querySelector('.custom-select__input');
	const selectOptions = select.querySelectorAll('.custom-select__option');

	// добавляем обработчик клика на сам селект
	select.addEventListener('click', () => {
		// если текущий открытый селект не равен текущему, закрываем его
		if (currentSelect && currentSelect !== select) {
			currentSelect.classList.remove('active');
		}

		// закрываем или открываем текущий селект
		currentSelect = select;
		select.classList.toggle('active');
	});

	// добавляем обработчики клика на опции
	selectOptions.forEach(option => {
		option.addEventListener('click', () => {
			const value = option.dataset.value;
			selectInput.setAttribute('name', value);
			selectInput.value = option.textContent;
			select.dispatchEvent(new Event('blur'));
		});

		// добавляем обработчик нажатия клавиши Enter на опции
		option.addEventListener('keydown', event => {
			if (event.key === 'Enter') {
				const value = option.dataset.value;
				selectInput.setAttribute('name', value);
				selectInput.value = option.textContent;
				select.dispatchEvent(new Event('blur'));
			}
		});
	});
});