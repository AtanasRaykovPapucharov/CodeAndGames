'use strict';

const gamesCtrl = (() => {
	return (data, view, utils) => {
		class GamesCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data;
				this.utils = utils;
			}

			get games() {
				this.data.gamesData.getGames()
					.then((games) => {
						return this.view.objectCollection('#content', { data: games.response })
					})
			}

			gameById(id) {
				this.data.gamesData.getGameById(id)
					.then((game) => {
						return this.view.objectSingle('#content', game.response)
					})
			}
		}

		let newCtrl = new GamesCtrl(data, view, utils);
		return newCtrl
	}
})()

export { gamesCtrl }