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
				return this.view.addForm('#content', { role: 'blog', notGame: true })
			}

			blogById(id) {
				this.data.getBlogById(id)
					.then((blog) => {
						let dateCurr = new Date(blog.date);
						blog.date = dateCurr.getDay() + '/' + dateCurr.getDate() + '/' + dateCurr.getFullYear();

						blog.isBlog = true;

						this.view.objectSingle('#content', blog)
							.then(() => {
								$('#single-content-container').html(blog.description);
							})
					})
					.catch((err) => {
						throw (err);
					})
			}

			commentBlogById(id) {
				let comment = {};
				let dateCurr = new Date();
				comment.date = dateCurr.getDay() + '/' + dateCurr.getDate() + '/' + dateCurr.getFullYear();
				comment.author = localStorage.getItem('current-user-app');
				comment.content = $('#comment-add-area').val();

				this.data.commentBlogById(id, comment)
					.then((resp) => {
						if (resp) {
							console.log('Blog comment added!');
						}
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

				let allTags = $('#all-tags').val();
				formObj.tags = allTags.split(/[\s,;]+/);
				formObj.comments = [];
				formObj.looks = 0;
				formObj.likes = 0;
				formObj.bookmarksCount = 0;
				formObj.commentsCount = 0;
				formObj.date = new Date();
				formObj.author = [localStorage.getItem('current-user-app')];

				this.data.postBlog(formObj)
					.then((resp) => {
						console.log(resp);
						this.utils.notifier.success('Blog post success!');
					})
					.catch((err) => {
						throw ('Server error: ' + err);
					})
			}

			getBlogsWithTag(tag) {
				this.data.getBlogByTag(tag)
					.then((blogs) => {
						if (!blogs || blogs == '' || blogs == []) {
							this.utils.notifier.info('No blog posts with that tag!');
							return;
						}

						blogs.forEach((blog) => {
							let titleShort = blog.title.substring(0, 19) + ' ...';
							blog.title = titleShort;
						}, this);
						return this.view.objectCollection('#content', { data: blogs });
					})
					.catch((err) => {
						throw (err);
					})
			}
		}

		let newCtrl = new BlogCtrl(data, view, utils);
		return newCtrl
	}
})()

export { blogCtrl }