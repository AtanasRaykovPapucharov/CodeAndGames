module.exports = (mongo) => {
	const db = mongo.db;
	const mongojsObj = mongo.api;

	return {
		getBlogs: () => {
			return new Promise((resolve, reject) => {
				db['blogs']
					.find({}, (err, blogs) => {
						if (err) {
							reject(err);
						}
						resolve(blogs);
					})
			});
		}
	}
}