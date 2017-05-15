module.exports = (mongo) => {
	const blogData = require('./blog.data')(mongo);

	return {
		blogs: (req, res, next) => {
			blogData.getBlogs()
				.then((blogs) => {
					res.status(200).json(blogs);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		blogById: (req, res, next) => {
			blogData.getBlogById(req.params.id)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		blogByTag: (req, res, next) => {
			blogData.getBlogByTag(req.params.tag)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		commentsUpdate: (req, res, next) => {
			const comment = req.body;

			blogData.updateComments(req.params.id, comment)
				.then((comment) => {
					if (comment) {
						res.status(200).json({ comment: comment, message: 'success' });
					}
				})
				.catch((err) => {
					res.status(400).json({ error: err.message });
				});
		},
		likeBlog: (req, res, next) => {
			blogData.likeBlogById(req.params.id)
				.then((resp) => {
					res.status(200).json(resp);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		newBlog: (req, res, next) => {
			blogData.postBlog(req.body)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		commentBlog: (req, res, next) => {
			let dataObj = { comments: req.body }
			
			blogData.updateBlog(req.params.id, dataObj)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		}
	}
}