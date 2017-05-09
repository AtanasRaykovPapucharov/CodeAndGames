'use strict';

const mainCtrl = (() => {
	return (data, view, utils) => {
		class MainCtrl {
			constructor(data, view, utils) {
				this.data = data;
				this.view = view;
				this.utils = utils;
				this.cloudinary = this.utils.cloudinary;
			}

			get showAbout() {
				return this.view.about('#content', {})
			}

			get showTournaments() {
				return this.view.tournaments('#content', {})
			}

			get showHome() {
				return this.view.home('#content', {})
			}

			checkHome() {
				let value = localStorage.getItem('current-user-app');
				if (value) {
					$('#log-forms-link').html('Sign out').attr('href', '#/signout');

					utils.notifier.success(`Welcome, ${value}!`);
				}
			}

			pleaseSignIn() {
				const user = localStorage.getItem('current-user-app');
				if (!user) {
					this.utils.notifier.warning(`Please, sign in first!`);
				}
				return !!user;
			}

			getTags() {
				this.data.userData.getTags()
					.then((tags) => {
						let tagsArray = tags[0].value;
						return this.view.aside('#content-aside', { data: tagsArray.sort() })
					})
			}

			postImage() {
				const imageFile = document.querySelector('input[type=file]').files[0];
				return this.cloudinary.uploadImage(imageFile)
					.then((resp) => {
						let imageUrl = resp.data.secure_url;
						$('#image-post').val(imageUrl);
						this.utils.notifier.success(`Image uploaded!`);
					})
					.catch((err) => {
						console.log(err);
						this.utils.notifier.error('Probably, too large file!');
					});
			}
		}

		let newCtrl = new MainCtrl(data, view, utils);
		return newCtrl
	}
})()

export { mainCtrl }