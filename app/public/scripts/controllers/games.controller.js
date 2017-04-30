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
						return this.view.objectSingle('#content', game)
					})
			}

			get showAddFormGames() {
				return this.view.addForm('#content', { role: 'game' })
			}

			newGame() {

			}
		}

		let newCtrl = new GamesCtrl(data, view, utils);
		return newCtrl
	}
})()

export { gamesCtrl }