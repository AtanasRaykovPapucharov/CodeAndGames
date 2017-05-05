'use strict';

const userCtrl = (() => {
	return (data, view, utils) => {
		class UserCtrl {
			constructor(data, view, utils) {
				this.emptyAvatar = '../../assets/images/staff/empty-avatar.png';
				this.view = view;
				this.data = data.userData;
				this.utils = utils;
				this.hash = this.utils.hash.hashSha3;
				this.validator = this.utils.validator;
				this.loginUser = (() => {
					return () => {
						let email = $('#signin-email').val();
						if (!this.validator.isValidEmail(email)) {
							$('#signin-email').val('');
							return;
						}

						let password = $('#signin-password').val();
						if (!this.validator.isValidPassword(password)) {
							$('#signin-password').val('');
							return;
						}

						$('#signin-email').val('');
						$('#signin-password').val('');

						let user = {
							email: email,
							password: this.hash(password)
						}

						return this.data.loginUser(user)
							.then((resp) => {
								resp.password = '';

								localStorage.setItem('current-user-app', resp.username);
								localStorage.setItem('app-user-data', JSON.stringify(resp));

								$('#log-forms-link').html('Sign out').attr('href', '#/signout');
								$('#profile-link').attr('src', resp.image);
								utils.notifier.success(`Welcome, ${resp.username}!`);
								return true;
							})
							.catch((err) => {
								utils.notifier.error(`No such a user!`);
								return false;
							})
					}
				})();
				this.registrateUser = (() => {
					return () => {
						let email = $('#signup-email').val();
						if (!this.validator.isValidEmail(email)) {
							$('#signup-email').val('');
							return;
						}

						let username = $('#signup-username').val();
						if (!this.validator.isValidUsername(username)) {
							$('#signup-username').val('');
							return;
						}

						let password = $('#signup-password').val();
						if (!this.validator.isValidPassword(password)) {
							$('#signup-password').val('');
							return;
						}

						let user = {
							email: email,
							username: username,
							password: this.hash(password),
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
				})();
			}

			showSignIn() {
				let currentWidth = window.screen.width;
				let route = '#content-aside';

				if (currentWidth < 500) {
					route = '#content';
				}
				return this.view.signin(route, {})
			}

			showSignUp() {
				return this.view.signup('#content-aside', {})
			}

			showChangePassword() {
				return this.view.changePass('#content-aside', {})
			}

			showForgotPassword() {
				return this.view.forgotPass('#content-aside', {})
			}

			contactUs() {
				this.view.contactUs('#content-aside', {})
			}

			profile() {
				const userStr = localStorage.getItem('app-user-data');
				const user = JSON.parse(userStr);
				let avatarUser = user.image || this.emptyAvatar;

				if (user) {
					$('#log-forms-link').html('Sign out').attr('href', '#/signout');
					this.view.profile('#content', { user: user, avatar: avatarUser })
				} else {
					this.utils.notifier.warning(`Please, sign in first!`);
				}

				return !!user;
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
				$('#profile-link').attr('src', this.emptyAvatar);
				utils.notifier.warning(`Bye, bye!`);
			}

			signIn() {
				this.loginUser();

				$('#signin-btn').on('click', (event) => {
					event.preventDefault();
					this.loginUser();
				})
			}

			signUp() {
				this.registrateUser();

				$('#signup-btn').on('click', (event) => {
					event.preventDefault();
					this.registrateUser();
				})
			}
		}

		let newCtrl = new UserCtrl(data, view, utils);
		return newCtrl
	}
})()

export { userCtrl }
