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

			commentGameById(id, comment) {
				const options = {
					data: comment
				}

				return this.requester.put(`/api/games/comment/${id}`, options);
			}

			postGame(game) {
				const options = {
					data: game
				}

				return this.requester.post('/api/games', options);
			}

			getGameByTag(tag) {
				return this.requester.put(`/api/games/${tag}`);
			}
		}

		let newData = new GamesData(requester);
		return newData;
	}
})()

export { gamesData }