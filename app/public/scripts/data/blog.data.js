'use strict';

const blogData = (() => {
	return (requester) => {
		class BlogData {
			constructor(requester) {
				this.requester = requester;
			}

			getBlogs() {
				return this.requester.get('/api/blog');
			}

			getBlogById(id) {
				return this.requester.get(`/api/blog/${id}`);
			}
		}

		let newData = new BlogData(requester);
		return newData
	}
})()

export { blogData }