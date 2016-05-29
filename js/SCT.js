'use strict'
;(function() {
	
	var Cards = {

		/**
		 * Массив для хранения карточек
		 */
		_cards: [],

		/**
		 * Добавляет карточку в массив
		 * @param {Object} - params - информация о карточке путешественника
		 * @param params.typeTC - тип транспорта
		 * @param params.flight - номер рейса
		 * @param params.seat - посадочное место
		 * @param params.A - точка отправки
		 * @param params.B - точка прибытия
		 */
		addCard: function(params) {
			this._cards.push( params );
		},

		/**
		 * Удаляет все карточки путешественника из массива _cards
		 */
		empty: function() {
			this._cards = [];
		},

		/**
		 * Случайным образом перемешивает массив _cards
		 */
		shuffle: function() {
			this._cards.sort(function(a, b) {
				return (Math.round(Math.random()) - 0.5);
			});
		},

		/**
		 * Сортирует массив карточек _cards начиная с начала маршрута.
		 */
		sortCards: function() {
			var index = 0,
				temp;

			/**
			 * Находит точку отправки всего машрута(первую карточку)
			 */
			for (var i = 1; i < this._cards.length; i++) {
				if (this._cards[index].A === this._cards[i].B) {
					index++;
					i = -1;
					continue;
				}
			}

			/**
			 * Карточку с началом пути устанавливает первой в массиве _cards 
			 */
			temp = this._cards[index];
			this._cards[index] = this._cards[0];
			this._cards[0] = temp;

			/**
			 *  Находит карточку, у которой точка прибытия совпадает с точкой отправки текущей карточки 
			 *  и устанавливает ее следующей за текущей
			 */
			for (var i = 1, index = 0; i < this._cards.length; i++) {
				if (this._cards[index].B === this._cards[i].A) {
					temp = this._cards[++index];
					this._cards[index] = this._cards[i];
					this._cards[i] = temp;
					i = index;
				}
			}

		},

		/**
		 * Каждый объект массива _cards преобразует в строк и пушит в новый массив 
		 * @return {Array} - возвращает преобразованный массив arr 
		 */
		conversion: function() {
			for (var i = 0, arr = []; i < this._cards.length; i++) {
				var j = '',
					index = 0,
					newArr = ['Сесть на', 'Рейс №', 'из', 'в', 'место'];

				for (var key in this._cards[i]) {
					j += ' ' + newArr[index] + ' ' + this._cards[i][key];
					index++;
				}

				arr.push(j);
			}

			return arr;
		}
	}

	window.SCT = {
		Cards: Cards,
	}
}());