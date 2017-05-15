module.exports = (mongo) => {
	const gameData = require('./game.data')(mongo);

	return {
		games: (req, res, next) => {
			gameData.getGames()
				.then((games) => {
					res.status(200).json(games);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		gameById: (req, res, next) => {
			gameData.getGameById(req.params.id)
				.then((game) => {
					res.status(200).json(game);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		gameByTag: (req, res, next) => {
			gameData.getGameByTag(req.params.tag)
				.then((game) => {
					res.status(200).json(game);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		newGame: (req, res, next) => {
			gameData.postGame(req.body)
				.then((game) => {
					res.status(200).json(game);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		likeGame: (req, res, next) => {
			gameData.likeGameById(req.params.id)
				.then((resp) => {
					res.status(200).json(resp);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		commentsUpdate: (req, res, next) => {
			const comment = req.body;

			gameData.updateComments(req.params.id, comment)
				.then((comment) => {
					if (comment) {
						res.status(200).json({ comment: comment, message: 'success' });
					}
				})
				.catch((err) => {
					res.status(400).json({ error: err.message });
				});
		}
	}
}