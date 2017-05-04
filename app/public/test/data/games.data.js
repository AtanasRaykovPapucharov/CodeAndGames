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
		}

		let newData = new GamesData(requester);
		return newData;
	}
})()
