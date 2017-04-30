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

				function addNewBlog() {
					$('#add-form-blog').serializeArray().forEach((el) => {
						formObj[el.name] = el.value;
					});
				}
				addNewBlog();
				console.log(formObj);

				$('#add-form-blog').on('submit', (e) => {
					e.preventDefault();
					addNewBlog();
					console.log(formObj);
				})
			}
		}

		let newCtrl = new BlogCtrl(data, view, utils);
		return newCtrl
	}
})()

export { blogCtrl }