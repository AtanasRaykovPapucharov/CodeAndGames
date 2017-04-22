const blogModel = (() => {
	return (newBlog, validator) => {
		class BlogModel {
			constructor(newBlog) {
				this.role = 'blog';
				this.title = newBlog.title || '';
				this.image = newBlog.img || '';
				this.link = newBlog.link || '';
				this.description = newBlog.description || [];
				this.tags = newBlog.tags || [];
				this.user = newBlog.user || 'admin';
				this.likes = newBlog.likes || 0;
				this.comments = newBlog.comments || [];
				this.date = new Date();
			}

			get blogObject() {
				return {
					role: this.role,
					title: this.title,
					image: this.title,
					link: this.link,
					description: this.description,
					tags: this.tags || [],
					author: this.user,
					comments: this.comments,
					likes: this.likes,
					date: this.date
				}
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