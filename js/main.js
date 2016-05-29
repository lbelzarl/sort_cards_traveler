var btn = document.querySelector('#demo');
btn.addEventListener('click', function() {

	SCT.Cards.empty();
	
	/**
	 * Добавляем карточки в массив _cards
	 */
	SCT.Cards.addCard('Автобус', '2A', '15', 'Новочеркасск', 'Ростов');
	SCT.Cards.addCard('Маршрука', '105', 'свободное', 'Ростов', 'Шахты');
	SCT.Cards.addCard('Автобус', '82Т', '23', 'Шахты', 'Воронеж');
	SCT.Cards.addCard('Автобус', '12Б', '1', 'Воронеж', 'Москва');
	SCT.Cards.addCard('Ковер-Самолет', '0', 'свободное', 'Москва', 'Багдад');
	SCT.Cards.addCard('Поезд', '689', '27', 'Багдад', 'АД');

	/**
	 * Перетасовываем карточки
	 */
	SCT.Cards.shuffle();

	/**
	 * Выводим список карточек до сортировки
	 * В качестве аргумента функци передаем id списка в котором будем выводить
	 */
	createLi(before);

	/**
	 * Сортируем карточки начиная с начала маршрута
	 */
	SCT.Cards.sortCards();

	/**
	 * Выводим список карточек после сортировки
	 * В качестве аргумента функци передаем id списка в котором будем выводить
	 */
	createLi(after);
});


function createLi(id) {
	/**
	 * Удаляет все элементы Li в указанном id списке
	 */
	while ( id.hasChildNodes() ) {
		id.removeChild(id.firstChild);
	}

	/**
	 * Конвертирует массив _cards 
	 */
	var cards = SCT.Cards.conversion();

	/**
     * Создает элемент Li и добавляет в список id
     */
	for (var i = 0; i < cards.length; i++) {
		var newLi = document.createElement('li');
		newLi.innerHTML = cards[i];
		id.appendChild(newLi);
	}
}