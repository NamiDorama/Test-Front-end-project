;(function() {

	class Message {
		constructor() {
			this._form = document.getElementById('form');
			this._btn = document.getElementById('btn');
			this._input = document.getElementById('add-text');
			this._alert = document.querySelector('.alert');
			this._name = 'Новый посетитель';
			this._comments = document.querySelector('.comments');
		}

		init() {
			let self = this;
			this.getValue(self);
			this.getValueByKey(self);
		}

		getValue(self) {
			this._form.addEventListener('submit', function(e) {
				e.preventDefault();
				if(!self._input.value || self._input.value.length < 2) return self.showError('Вы не можете отправить пустое сообщение', self);
				self.addText(self._input.value);
			})
		}

		getValueByKey(self) {
			window.addEventListener('keydown', function(e) {

				if(e.ctrlKey && e.keyCode == 13) {
					if(!self._input.value || self._input.value.length < 2) return self.showError('Вы не можете отправить пустое сообщение', self);

					self.addText(self._input.value);
				}
			})
		}

		showError(error, self) {
			this._alert.textContent = error;
			this._alert.classList.add('alert-danger');
			setTimeout(function() {
				self._alert.textContent = '';
				self._alert.classList.remove('alert-danger');
			}, 2000);
		}

		addText(text) {
			let now = new Date();
			let date = now.toLocaleString('ru', {day: 'numeric', month: 'long'});
			let year = now.getFullYear();
			let textMarkup = `
				<div class="separate-comments">
					<div class="info">
						<div class="author-name">
							<p>${this._name}</p>
						</div>
						<div class="comment-date">
							<p>${date} ${year}</p>
						</div>
					</div>
					<div class="comment-text">
						<p>${text}</p>
					</div>
				</div>
			`;

			this._comments.insertAdjacentHTML('beforeEnd', textMarkup);
			this._input.value = '';
		}


	}

	let newMessage = new Message;
	newMessage.init();

})();