'use strict'
var btn = document.querySelector('#demo');
btn.addEventListener('click', function() {

	SCT.Cards.empty();

	/**
	 * Добавляем карточки в массив _cards
	 */
	SCT.Cards.addCard({typeTC: 'Автобус'      , flight: '2A' , seat: '15'       , A: 'Новочеркасск', B: 'Ростов' });
	SCT.Cards.addCard({typeTC: 'Поезд'        , flight: '105', seat: 'свободное', A: 'Ростов'      , B: 'Шахты'  });
	SCT.Cards.addCard({typeTC: 'Автобус'      , flight: '82Т', seat: '23'       , A: 'Шахты'       , B: 'Воронеж'});
	SCT.Cards.addCard({typeTC: 'Автобус'      , flight: '12Б', seat: '1'        , A: 'Воронеж'     , B: 'Москва' });
	SCT.Cards.addCard({typeTC: 'Ковер-Самолет', flight: '0'  , seat: 'свободное', A: 'Москва'      , B: 'Багдад' });
	SCT.Cards.addCard({typeTC: 'Поезд'        , flight: '689', seat: '27'       , A: 'Багдад'      , B: 'АД'     });

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

function createLi(listId) {

	// Удаляет все элементы  listItem в указанном listId списке
	while ( listId.hasChildNodes() ) {
		listId.removeChild(listId.firstChild);
	}

	// Конвертирует массив _cards 
	var cards = SCT.Cards.conversion();

	// Создает элемент listItem и добавляет в список listId
	for (var i = 0; i < cards.length; i++) {
		var newLi = document.createElement('li');
		newLi.innerHTML = cards[i];
		listId.appendChild(newLi);
	}
}