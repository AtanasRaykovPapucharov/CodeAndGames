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
		getGameById: (id) => {
			return new Promise((resolve, reject) => {
				db['games']
					.findOne({
						_id: mongojsObj.ObjectId(id)
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
			let updated = { $push: { comments: comment } }

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