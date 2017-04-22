'use strict';

const blogData = (() => {
	return (requester, validator, blogModel) => {
		class BlogData {
			constructor(requester, validator, blogModel) {
				this.requester = requester;
				this.validator = validator;
			}

			getBlogs() {
				return this.requester.get('/api/blog');
			}

			getBlogById(id) {
				return this.requester.get(`/api/blog/${id}`);
			}
		}

		let newData = new BlogData(requester, validator, blogModel);
		return newData;
	}
})()

export { blogData }