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

			get showAddFormBlog() {
				return this.view.addForm('#content', { role: 'blog' })
			}

			blogById(id) {
				this.data.getBlogById(id)
					.then((blog) => {
						this.view.objectSingle('#content', blog);
						$('#single-content-container').html(Handlebars.compile(blog.content)());
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