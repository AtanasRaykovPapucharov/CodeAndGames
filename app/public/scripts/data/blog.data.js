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

			commentBlogById(id, comment) {
				const options = {
					data: comment
				}
				
				return this.requester.put(`/api/blog/comment/${id}`, options);
			}

			postBlog(blog) {
				const options = {
					data: blog
				}
			
				return this.requester.post('/api/blog', options);
			}

			getBlogByTag(tag) {
				return this.requester.get(`/api/blog/${tag}`);
			}
		}

		let newData = new BlogData(requester);
		return newData;
	}
})()

export { blogData }