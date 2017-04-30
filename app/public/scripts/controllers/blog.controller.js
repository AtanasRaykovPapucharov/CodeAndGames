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
							blog.titleShort = blog.title.substring(0, 19) + ' ...';
						}, this);
						return this.view.objectCollection('#content', { data: blogs })
					})
			}

			blogById(id) {
				this.data.getBlogById(id)
					.then((blog) => {
						return this.view.objectSingle('#content', blog)
					})
			}

			get showAddFormBlog() {
				return this.view.addForm('#content', { role: 'blog' })
			}

			newBlog() {
				let formObj = {};

				$('#add-form-blog').serializeArray().forEach((el) => {
					formObj[el.name] = el.value;
				});

				this.data.postBlog(formObj)
					.then((resp) => {
						console.log(resp);
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