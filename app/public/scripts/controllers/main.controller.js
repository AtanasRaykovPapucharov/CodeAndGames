'use strict';

const mainCtrl = (() => {
	return (data, view, utils) => {
		class MainCtrl {
			constructor(data, view, utils) {
				this.data = data;
				this.view = view;
				this.utils = utils;
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
		}

		let newCtrl = new MainCtrl(data, view, utils);
		return newCtrl
	}
})()

export { mainCtrl }