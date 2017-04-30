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

			postBlog(blog) {
				return this.requester.post('/api/blog', blog);
			}
		}

		let newData = new BlogData(requester);
		return newData;
	}
})()

export { blogData }