'use strict';

const blogCtrl = (() => {
	return (data, view, utils) => {
		class BlogCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data.blogData;
				this.utils = utils;
			}

			get blogs() {
				this.data.getBlogs()
					.then((blogs) => {
						blogs.forEach((blog) => {
							let titleShort = blog.title.substring(0, 19) + ' ...';
							blog.title = titleShort;
						}, this);
						return this.view.objectCollection('#content', { data: blogs })
					})
			}

			get showAddFormBlog() {
				return this.view.addForm('#content', { role: 'blog' })
			}

			blogById(id) {
				this.data.getBlogById(id)
					.then((blog) => {
						this.view.objectSingle('#content', blog)
							.then(() => {
								$('#single-content-container').html(blog.content);
							})
					})
					.catch((err) => {
						throw (err);
					})
			}

			newBlog() {
				let formObj = {};

				$('#add-form-blog').serializeArray().forEach((el) => {
					formObj[el.name] = el.value;
				});

				this.data.postBlog(formObj)
					.then((resp) => {
						console.log(resp);
						this.utils.notifier.success('Blog post successful!');
					})
					.catch((err) => {
						throw ('Server error: ' + err);
					})
			}
		}

		let newCtrl = new BlogCtrl(data, view, utils);
		return newCtrl
	}
})()

export { blogCtrl }