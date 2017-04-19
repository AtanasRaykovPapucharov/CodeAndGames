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
		},
		getBlogById: (id) => {
			return new Promise((resolve, reject) => {
				db['blogs']
					.findOne({
						_id: mongojsObj.ObjectId(id)
					}, (err, blog) => {
						if (err) {
							reject(err);
						}
						resolve(blog);
					})
			});
		},
	}
}