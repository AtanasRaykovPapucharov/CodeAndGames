'use strict';

const userCtrl = (() => {
	return (data, view, utils) => {
		class UserCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data.userData;
				this.utils = utils;
			}

			get profile() {
				return this.view.profile('#content-aside', {})
			}

			signOut() {
			}

			signIn() {
				let hash = this.utils.hash.hashSha3;
				let validator = this.utils.validator;

				$('#signin-btn').on('click', () => {
					let email = $('#signin-email').val();
					if (!validator.isValidEmail(email)) {
						$('#signin-email').val('');
						return;
					}

					let password = $('#signin-password').val();
					if (!validator.isValidPassword(password)) {
						$('#signin-password').val('');
						return;
					}

					$('#signin-email').val('');
					$('#signin-password').val('');

					let user = {
						email: email,
						password: hash(password)
					}

					this.data.loginUser(user)
						.then((resp) => {
							console.log(resp);
						})
						.catch((err) => {
							console.log(err);
						})
				})
			}

			signUp() {
				let hash = this.utils.hash.hashSha3;
				let validator = this.utils.validator;

				$('#signup-btn').on('click', () => {
					let email = $('#signup-email').val();
					if (!validator.isValidEmail(email)) {
						$('#signup-email').val('');
						return;
					}

					let username = $('#signup-username').val();
					if (!validator.isValidUsername(username)) {
						$('#signup-username').val('');
						return;
					}

					let password = $('#signup-password').val();
					if (!validator.isValidPassword(password)) {
						$('#signup-password').val('');
						return;
					}

					let user = {
						email: email,
						username: username,
						password: hash(password),
						image: '',
						age: '',
						interests: [],
						blogs: [],
						games: []
					}

					$('#signup-email').val('');
					$('#signup-username').val('');
					$('#signup-password').val('');

					this.data.newUser(user)
						.then((respUser) => {
							localStorage.setItem('app-user-data', JSON.stringify(respUser));
						})
						.catch((err) => {
							console.log(err);
						})
				})
			}
		}

		let newCtrl = new UserCtrl(data, view, utils);
		return newCtrl
	}
})()

export { userCtrl }
