const blogCtrl = (() => {
	return (data, view, utils) => {
		class BlogCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data;
				this.utils = utils;
			}

			get blogs() {
				this.data.blogData.getBlogs()
					.then((blogs) => {
						return this.view.objectCollection('#content', { data: blogs.response })
					})
			}

			blogById(id) {
				this.data.blogData.getBlogById(id)
					.then((blog) => {
						return this.view.objectSingle('#content', blog.response)
					})
			}
		}

		let newCtrl = new BlogCtrl(data, view, utils);
		return newCtrl
	}
})()

export { blogCtrl }