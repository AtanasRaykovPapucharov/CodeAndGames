'use strict';

const gamesCtrl = (() => {
	return (data, view, utils) => {
		class GamesCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data;
				this.utils = utils;
			}
		}

		let newCtrl = new GamesCtrl(data, view, utils);
		return newCtrl
	}
})()

export { gamesCtrl }