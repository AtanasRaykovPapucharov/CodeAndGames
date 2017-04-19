'use strict';

const blogData = (() => {
	return (requester) => {
		class BlogData {
			constructor(requester) {
				this.requester = requester;
			}

			getblog() {
				return this.requester.get('/api/blog');
			}
		}

		let newData = new BlogData(requester);
		return newData
	}
})()

export { blogData }