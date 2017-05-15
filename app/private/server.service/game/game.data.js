module.exports = (mongo) => {
	const db = mongo.db;
	const mongojsObj = mongo.api;

	return {
		getGames: () => {
			return new Promise((resolve, reject) => {
				db['games']
					.find({}, (err, games) => {
						if (err) {
							reject(err);
						}
						resolve(games);
					})
			});
		},
		getGameByTag: (tag) => {
			return new Promise((resolve, reject) => {
				db['games']
					.find({ tags: tag }, (err, game) => {
						if (err) {
							reject(err);
						}
						resolve(game);
					})
			});
		},
		getGameById: (id) => {
			return new Promise((resolve, reject) => {
				db['games']
					.findAndModify({
						query: { _id: mongojsObj.ObjectId(id) },
						update: { $inc: { looks: 1 } },
						new: true
					}, (err, game) => {
						if (err) {
							reject(err);
						}
						resolve(game);
					})
			});
		},
		likeGameById: (id) => {
			return new Promise((resolve, reject) => {
				db['games']
					.findAndModify({
						query: { _id: mongojsObj.ObjectId(id) },
						update: { $inc: { likes: 1 } },
						new: true
					}, (err, game) => {
						if (err) {
							reject(err);
						}
						resolve(game);
					})
			});
		},
		postGame: (game) => {
			return new Promise((resolve, reject) => {
				db['games']
					.save(game, (err, game) => {
						if (err) {
							reject(err);
						}
						resolve(game);
					})
			});
		},
		updateGame: (id, dataObj) => {
			let updated = { $push: dataObj }

			return new Promise((resolve, reject) => {

				db['games'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
					})
			});
		},
		updateComments: (id, comment) => {
			let updated = { $push: { comments: comment }, $inc: { commentsCount: 1 } }

			return new Promise((resolve, reject) => {

				db['games'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
					})
			});
		}
	}
}