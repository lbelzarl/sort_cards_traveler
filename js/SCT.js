;(function() {
	
	var Cards = {

		// Массив карточек
		_cards: [],

		// Добавляет карту
		addCard: function(typeTC, flight, seat, A, B) {
			this._cards.push( new Card(typeTC, flight, seat, A, B) );
		},

		// Удаляет все карточки путешественника
		empty: function() {
			this._cards = [];
		},

		// Случайным образом перемешивает массив _cards
	    shuffle: function() {
	    	this._cards.sort(function(a, b) {
	        	return (Math.round(Math.random()) - 0.5);
	    	});
	    },

	    // Упорядочиваем массив карточек _cards.
	    sortCards: function() {
			var index = 0,
				counter,
				temp;
	
			while (index < this._cards.length) {
				for (var i = index+1; i < this._cards.length; i++) {
					if (this._cards[index].A === this._cards[i].B) {
						temp = this._cards[index];
						this._cards[index] = this._cards[i];
						this._cards[i] = temp;
						i = index;
					} 
				}
				index++;
			}
		},

	    // Преобразуем массив _cards с объектами в массив значений объета 
	    conversion: function() {
	    	for (var i = 0, arr = []; i < this._cards.length; i++) {
	    		var j = '';
	    		
	    		for (var key in this._cards[i]) {
	    			j += ' ' + this._cards[i][key];
	    		}

	    		arr.push(j);
	    	}

	    	return arr;
	    }
	}

	function Card (typeTC, flight, seat, A, B) {
		this.typeTC = typeTC;
		this.flight = flight;
		this.seat = seat;
		this.A = A;
		this.B = B;
	}

	window.SCT = {
		Cards: Cards,
		Card: Card
	}
}());