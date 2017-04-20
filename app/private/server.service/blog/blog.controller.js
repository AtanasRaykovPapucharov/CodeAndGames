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