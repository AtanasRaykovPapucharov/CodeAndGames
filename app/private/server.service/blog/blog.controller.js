module.exports = (mongo) => {
	const blogData = require('./blog.data')(mongo);

	return {
		blogs: (req, res, next) => {
			blogData.getBlogs()
				.then((blogs) => {
					res.status(200);
					res.json(blogs);
				});
		},
		blogById: (req, res, next) => {
			blogData.getBlogById(req.params.id)
				.then((blog) => {
					res.status(200);
					res.json(blog);
				});
		},
	}
}