'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
	var Message = function () {
		function Message() {
			_classCallCheck(this, Message);

			this._form = document.getElementById('form');
			this._btn = document.getElementById('btn');
			this._input = document.getElementById('add-text');
			this._alert = document.querySelector('.alert');
			this._name = 'Новый посетитель';
			this._comments = document.querySelector('.comments');
		}

		_createClass(Message, [{
			key: 'init',
			value: function init() {
				var self = this;
				this.getValue(self);
				this.getValueByKey(self);
			}
		}, {
			key: 'getValue',
			value: function getValue(self) {
				this._form.addEventListener('submit', function (e) {
					e.preventDefault();
					if (!self._input.value || self._input.value.length < 2) return self.showError('Вы не можете отправить пустое сообщение', self);
					self.addText(self._input.value);
				});
			}
		}, {
			key: 'getValueByKey',
			value: function getValueByKey(self) {
				window.addEventListener('keydown', function (e) {

					if (e.ctrlKey && e.keyCode == 13) {
						if (!self._input.value || self._input.value.length < 2) return self.showError('Вы не можете отправить пустое сообщение', self);

						self.addText(self._input.value);
					}
				});
			}
		}, {
			key: 'showError',
			value: function showError(error, self) {
				this._alert.textContent = error;
				this._alert.classList.add('alert-danger');
				setTimeout(function () {
					self._alert.textContent = '';
					self._alert.classList.remove('alert-danger');
				}, 2000);
			}
		}, {
			key: 'addText',
			value: function addText(text) {
				var now = new Date();
				var date = now.toLocaleString('ru', { day: 'numeric', month: 'long' });
				var year = now.getFullYear();
				var textMarkup = '\n\t\t\t\t<div class="separate-comments">\n\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t<div class="author-name">\n\t\t\t\t\t\t\t<p>' + this._name + '</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="comment-date">\n\t\t\t\t\t\t\t<p>' + date + ' ' + year + '</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="comment-text">\n\t\t\t\t\t\t<p>' + text + '</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';

				this._comments.insertAdjacentHTML('beforeEnd', textMarkup);
				this._input.value = '';
			}
		}]);

		return Message;
	}();

	var newMessage = new Message();
	newMessage.init();
})();