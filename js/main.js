var btn = document.querySelector('#demo');
btn.addEventListener('click', function() {
	
	SCT.Cards.empty();
	
	// Добавляем карточки в массив _cards
	SCT.Cards.addCard('Автобус', '2A', '15', 'Новочеркасск', 'Ростов');
	SCT.Cards.addCard('Маршрука', '105', 'свободное', 'Ростов', 'Шахты');
	SCT.Cards.addCard('Автобус', '82Т', '23', 'Шахты', 'Воронеж');
	SCT.Cards.addCard('Автобус', '12Б', '1', 'Воронеж', 'Москва');
	SCT.Cards.addCard('Ковер-Самолет', '0', 'свободное', 'Москва', 'Багдад');
	SCT.Cards.addCard('Поезд', '689', '27', 'Багдад', 'АД');

	SCT.Cards.shuffle();

	// Выводим список карточек до сортировки
	createLi(before);

	// Выводим список карточек после сортировки
	SCT.Cards.sortCards();
	createLi(after);
});


function createLi(id) {
	//Очищает список карточек
	while ( id.hasChildNodes() ) {
        id.removeChild(id.firstChild);
    }

    // Создает элемент и добавляет в список 
	var cards = SCT.Cards.conversion();
	for (var i = 0; i < cards.length; i++) {
		var newLi = document.createElement('li');
		newLi.innerHTML = cards[i];
		id.appendChild(newLi);
	}
}