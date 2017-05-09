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
		getBlogByTag: (tag) => {
			return new Promise((resolve, reject) => {
				db['blogs']
					.find({ tags: { $in: tag } }, (err, blog) => {
						if (err) {
							reject(err);
						}
						resolve(blog);
					})
			});
		},
		postBlog: (blog) => {
			return new Promise((resolve, reject) => {
				db['blogs']
					.save(blog, (err, blog) => {
						if (err) {
							reject(err);
						}
						resolve(blog);
					})
			});
		},
		updateBlog: (id, dataObj) => {
			let updated = { $push: dataObj }

			return new Promise((resolve, reject) => {

				db['blogs'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
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

				db['blogs'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
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