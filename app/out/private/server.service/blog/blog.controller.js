'use strict';

module.exports = function (mongo) {
	var blogData = require('./blog.data')(mongo);

	return {
		blogs: function blogs(req, res, next) {
			blogData.getBlogs().then(function (blogs) {
				res.status(200);
				//res.send(blogs);
				res.json(blogs);
			});
		}
	};
};