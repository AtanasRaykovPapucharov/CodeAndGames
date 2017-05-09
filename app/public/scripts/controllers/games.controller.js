'use strict';

const gamesCtrl = (() => {
	return (data, view, utils) => {
		class GamesCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data.gamesData;
				this.utils = utils;
			}

			get games() {
				this.data.getGames()
					.then((games) => {
						return this.view.objectCollection('#content', { data: games })
					})
			}

			gameById(id) {
				this.data.getGameById(id)
					.then((game) => {
						let dateCurr = new Date(game.date); 
						game.date = dateCurr.getDay() + '/' + dateCurr.getDate() + '/' + dateCurr.getFullYear();

						game.isBlog = false;
						
						this.view.objectSingle('#content', game)
							.then(() => {
								$('#single-content-container').html(game.description);
							})
					})
			}

			get showAddFormGames() {
				return this.view.addForm('#content', { role: 'game' })
			}

			showChess() {
				return this.view.chess('#content', {})
			}

			newGame() {
				let formObj = {};

				$('#add-form-game').serializeArray().forEach((el) => {
					formObj[el.name] = el.value;
				});

				let allTags = $('all-tags').val();
				formObj.tags = allTags.split(/[\s,;]+/);
				formObj.comments = [];
				formObj.date = new Date();
				formObj.author = [localStorage.getItem('current-user-app')];

				this.data.postGame(formObj)
					.then((resp) => {
						console.log(resp);
						this.utils.notifier.success('Game post success!');
					})
					.catch((err) => {
						throw ('Server error: ' + err);
					})
			}
		}

		let newCtrl = new GamesCtrl(data, view, utils);
		return newCtrl
	}
})()

export { gamesCtrl }