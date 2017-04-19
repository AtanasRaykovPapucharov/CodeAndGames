module.exports = (mongo) => {
	const blogData = require('./blog.data')(mongo);

	return {
		blogs: (req, res, next) => {
			blogData.getBlogs()
				.then((blogs) => {
					res.status(200);
					//res.send(blogs);
					res.json(blogs);
				});
		}
	}
}