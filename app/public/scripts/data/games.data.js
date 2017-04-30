'use strict';

const gamesData = (() => {
	return (requester) => {
		class GamesData {
			constructor(requester) {
				this.requester = requester;
			}

			getGames() {
				return this.requester.get('/api/games');
			}

			getGameById(id) {
				return this.requester.get(`/api/games/${id}`);
			}

			postGame(game) {
				return this.requester.post('/api/games', game);
			}
		}

		let newData = new GamesData(requester);
		return newData;
	}
})()

export { gamesData }