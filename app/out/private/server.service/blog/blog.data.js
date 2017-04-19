'use strict';

module.exports = function (mongo) {
	var db = mongo.db;
	var mongojsObj = mongo.api;

	return {
		getBlogs: function getBlogs() {
			return new Promise(function (resolve, reject) {
				db['blogs'].find({}, function (err, blogs) {
					if (err) {
						reject(err);
					}
					resolve(blogs);
				});
			});
		}
	};
};