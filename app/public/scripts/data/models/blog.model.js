const blogModel = (() => {
	return (newBlog) => {
		class BlogModel {
			constructor(newBlog) {
				this.title = newBlog.title || '';
				this.description = newBlog.description || '';
				this.img = newBlog.img || '';
				this.user = newBlog.user || 'Admin';
				this.comments = [];
			}

			get title() {
				return this.title;
			}

			get description() {
				return this.description;
			}

			get img() {
				return this.img;
			}

			get user() {
				return this.user;
			}

			get comments() {
				return this.comments;
			}

			addComment(comment) {
				if (comment) {
					this.comments.push(comment);
				}
				return this;
			};
		}

		let newModel = new BlogModel(newBlog);
		return newModel
	}
})()

export { blogModel }