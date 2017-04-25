'use strict';

const mainCtrl = (() => {
	return (data, view, utils) => {
		class MainCtrl {
			constructor(data, view, utils) {
				this.data = data;
				this.view = view;
				this.utils = utils;
			}

			get showSignIn() {
				return this.view.signin('#content-aside', {})
			}

			get showSignUp() {
				return this.view.signup('#content-aside', {})
			}

			get showChangePassword() {
				return this.view.changePass('#content-aside', {})
			}

			get showForgotPassword() {
				return this.view.forgotPass('#content-aside', {})
			}

			get showHome() {
				return this.view.home('#content', {})
			}

			get showAbout() {
				return this.view.about('#content', {})
			}

			get showTournaments() {
				return this.view.tournaments('#content', {})
			}

			get showAddFormBlog() {
				return this.view.addForm('#content', { data: 'blog' })
			}

			get showAddFormGames() {
				return this.view.addForm('#content', { data: 'games' })
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

			checkHome() {
				let value = localStorage.getItem('current-user-app');
				if (value) {
					$('#log-forms-link').html('Sign out').attr('href', '#/signout');

					utils.notifier.success(`Welcome, ${value}!`);
				}
			}
		}

		let newCtrl = new MainCtrl(data, view, utils);
		return newCtrl
	}
})()

export { mainCtrl }