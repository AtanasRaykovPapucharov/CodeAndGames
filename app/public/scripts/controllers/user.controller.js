'use strict';

const userCtrl = (() => {
	return (data, view, utils) => {
		class UserCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data.userData;
				this.utils = utils;
			}

			contactUs() {
				this.view.contactUs('#content-aside', {})
			}

			profile() {
				let value = localStorage.getItem('current-user-app');

				if (value) {
					$('#log-forms-link').html('Sign out').attr('href', '#/signout');
					this.view.profile('#content', {})
				} else {
					this.utils.notifier.warning(`Please, sign in first!`);
				}

				return !!value;
			}

			signUpAfter() {
				let cookie = this.utils.cookies.getCookieByName('current-user-app');

				if (cookie) {
					let cookieValue = cookie.split('=')[1];
					localStorage.setItem('current-user-app', cookieValue);
					utils.notifier.success(`Welcome, ${cookieValue}!`);
				} else {
					utils.notifier.warning(`Please, sign up first!`);
				}

				return !!cookie;
			}

			signOut() {
				localStorage.clear();
				$('#log-forms-link').html('Sign in / Sign up').attr('href', '#/signin');
				utils.notifier.warning(`Bye, bye!`);
			}

			signIn() {
				let hash = this.utils.hash.hashSha3;
				let validator = this.utils.validator;

				let loginUser = (() => {
					return () => {
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

						return this.data.loginUser(user)
							.then((resp) => {
								resp.password = '';

								localStorage.setItem('current-user-app', resp.username);
								localStorage.setItem('app-user-data', JSON.stringify(resp));

								$('#log-forms-link').html('Sign out').attr('href', '#/signout');

								utils.notifier.success(`Welcome, ${resp.username}!`);
								return true;
							})
							.catch((err) => {
								utils.notifier.error(`No such a user!`);
								return false;
							})
					}
				})()

				loginUser();

				$('#signin-btn').on('click', (event) => {
					event.preventDefault();
					loginUser();
				})
			}

			signUp() {
				let hash = this.utils.hash.hashSha3;
				let validator = this.utils.validator;

				let registrateUser = (() => {
					return () => {
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
							key: '',
							image: './assets/images/staff/empty-avatar.png',
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
								respUser.password = '';
								localStorage.setItem('app-user-data', JSON.stringify(respUser));

								utils.notifier.success('Please, confirm registration on your e-mail first!');
								return true;
							})
							.catch((err) => {
								console.log('Server error: ' + err);
								utils.notifier.error('This e-mail address already exists!');
								return false;
							})
					}
				}
				)();

				registrateUser();

				$('#signup-btn').on('click', (event) => {
					event.preventDefault();
					registrateUser();
				})
			}
		}

		let newCtrl = new UserCtrl(data, view, utils);
		return newCtrl
	}
})()

export { userCtrl }
