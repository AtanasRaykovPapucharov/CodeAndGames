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
		newGame: (req, res, next) => {
			blogData.gameBlog(req.body)
				.then((game) => {
					res.status(200).json(game);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		likeGame: (req, res, next) => {
			let dataObj = { likes: req.body }

			gameData.updateGame(req.params.id, dataObj)
				.then((game) => {
					res.status(200).json(game);
				})
				.catch((err) => {
					res.send(err);
				});
		}
	}
}