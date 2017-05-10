'use strict';

const profileCtrl = (() => {
	return (data, view, utils) => {
		class ProfileCtrl {
			constructor(data, view, utils) {
				this.emptyAvatar = './assets/images/staff/empty-avatar.png';
				this.imageFile = '';
				this.view = view;
				this.data = data.userData;
				this.utils = utils;
				this.cloudinary = this.utils.cloudinary;
				this.hash = this.utils.hash.hashSha3;
				this.validator = this.utils.validator;
			}

			imageUpload() {
				return this.cloudinary.uploadImage(this.imageFile)
					.then((resp) => {
						let imageObj = resp.data.secure_url;

						this.data.putImage(imageObj)
							.then((resp) => {
								if (resp) {
									console.log(resp);
									let userData = JSON.parse(localStorage.getItem('app-user-data'));
									userData.image = imageObj;
									localStorage.setItem('app-user-data', JSON.stringify(userData));
									$('#profile-link').attr('src', imageObj);
									$('#span-upload .btn').addClass('hidden-obj');
									utils.notifier.success('Image avatar saved!');
								}
							})
							.catch((err) => {
								console.log(err);
							});
					})
					.catch((err) => {
						console.log(err);
					});
			}

			profile() {
				const userStr = localStorage.getItem('app-user-data');
				const user = JSON.parse(userStr);

				if (user) {
					$('#log-forms-link').html('Sign out').attr('href', '#/signout');

					this.view.profile('#content', { user: user })
						.then(() => {
							$('#file-upload').on('change', (e) => {
								e.preventDefault();
								this.imageFile = document.querySelector('input[type=file]').files[0];
								let preview = $('#user-avatar');
								let reader = new FileReader();

								if (this.imageFile) {
									reader.readAsDataURL(this.imageFile);
								}
								reader.onloadend = () => {
									preview.attr('src', reader.result);
									$('#span-upload .btn').removeClass('hidden-obj');
								}
							})
						})
						.catch((err) => {
							console.log(err);
						})
				} else {
					this.utils.notifier.warning(`Please, sign in first!`);
				}

				return !!user;
			}
		}

		let newCtrl = new ProfileCtrl(data, view, utils);
		return newCtrl
	}
})()

export { profileCtrl }
