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
				const options = {
					data: game
				}
				
				return this.requester.post('/api/games', options);
			}
		}

		let newData = new GamesData(requester);
		return newData;
	}
})()

export { gamesData }