'use strict';

const gamesData = (() => {
	return (requester, validator, gameModel) => {
		class GamesData {
			constructor(requester, validator, gameModel) {
				this.requester = requester;
				this.validator = validator;
			}

			getGames() {
				return this.requester.get('/api/games');
			}

			getGameById(id) {
				return this.requester.get(`/api/games/${id}`);
			}
		}

		let newData = new GamesData(requester, validator, gameModel);
		return newData;
	}
})()

export { gamesData }