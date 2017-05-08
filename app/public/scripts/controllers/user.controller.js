'use strict';

const userCtrl = (() => {
	return (data, view, utils) => {
		class UserCtrl {
			constructor(data, view, utils) {
				this.emptyAvatar = './assets/images/staff/empty-avatar.png';
				this.imageFile = '';
				this.view = view;
				this.data = data.userData;
				this.utils = utils;
				this.cloudinary = this.utils.cloudinary;
				this.hash = this.utils.hash.hashSha3;
				this.validator = this.utils.validator;
				this.contactUsLog = (() => {
					return () => {
						let email = $('#contact-us-email').val();
						if (!this.validator.isValidEmail(email)) {
							$('#contact-us-email').val('');
							return;
						}

						let subject = $('#contact-us-subject').val();
						let content = $('#contact-us-msg').val();

						if (!subject || !content) {
							return;
						}

						let msg = {
							email: email,
							subject: subject,
							content: content
						}

						$('#contact-us-email').val('');
						$('#contact-us-subject').val('');
						$('#contact-us-msg').val('');

						this.data.contactUs(msg)
							.then((resp) => {
								utils.notifier.success('Message sent!');
								return true;
							})
							.catch((err) => {
								console.log('Server error: ' + err);
							})
					}
				})();
				this.forgotPass = (() => {
					return () => {
						let email = $('#forgot-pass-email').val();
						if (!this.validator.isValidEmail(email)) {
							$('#forgot-pass-email').val('');
							return;
						}

						$('#forgot-pass-email').val('');

						let user = {
							email: email
						}

						return this.data.forgotPassword(user)
							.then((resp) => {
								if (resp) {
									utils.notifier.success('New password sent to your e-mail address!');
								}

								return resp;
							})
							.catch((err) => {
								utils.notifier.error('No such a user!');
								return false;
							})


					}
				})();
				this.changePass = (() => {
					return () => {
						let email = $('#change-pass-email').val();
						if (!this.validator.isValidEmail(email)) {
							$('#change-pass-email').val('');
							return;
						}

						let passwordOld = $('#change-pass-old').val();
						if (!this.validator.isValidPassword(passwordOld)) {
							$('#change-pass-old').val('');
							return;
						}

						let passwordNew = $('#change-pass-new').val();
						if (!this.validator.isValidPassword(passwordNew)) {
							$('#change-pass-new').val('');
							return;
						}

						$('#change-pass-email').val('');
						$('#change-pass-old').val('');
						$('#change-pass-new').val('');

						let user = {
							email: email,
							passwordOld: this.hash(passwordOld),
							passwordNew: this.hash(passwordNew)
						}

						return this.data.changeUserPassword(user)
							.then((resp) => {
								if (resp) {
									// localStorage.clear();
									// $('#log-forms-link').html('Sign in / Sign up').attr('href', '#/signin');
									// $('#profile-link').attr('src', this.emptyAvatar);
									utils.notifier.success(`Password changed successfully!`);
								}

								return resp;
							})
							.catch((err) => {
								utils.notifier.error(`No such a user!`);
								return false;
							})
					}
				})();
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
							image: this.emptyAvatar,
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

			signIn() {
				this.loginUser();

				$('#signin-btn').on('click', (event) => {
					event.preventDefault();
					this.loginUser();
				})
			}

			showSignUp() {
				return this.view.signup('#content-aside', {})
			}

			signUp() {
				this.registrateUser();

				$('#signup-btn').on('click', (event) => {
					event.preventDefault();
					this.registrateUser();
				})
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
				if ($('#profile-link').attr('src') !== this.emptyAvatar) {
					$('#profile-link').attr('src', this.emptyAvatar);
				} else {
					utils.notifier.infoUntitle('Bye, bye!');
				}
			}

			showChangePassword() {
				return this.view.changePass('#content-aside', {})
			}

			showForgotPassword() {
				return this.view.forgotPass('#content-aside', {})
			}

			showContactUs() {
				return this.view.contactUs('#content-aside', {})
			}

			changePassword() {
				this.changePass();

				$('#change-password-btn').on('click', (event) => {
					event.preventDefault();
					this.changePass();
				})
			}

			forgotPassword() {
				this.forgotPass();

				$('#forgot-password-btn').on('click', (event) => {
					event.preventDefault();
					this.forgotPass();
				})
			}

			contactUs() {
				this.contactUsLog();

				$('#contact-us-btn').on('click', (event) => {
					event.preventDefault();
					this.contactUsLog();
				})
			}

		}

		let newCtrl = new UserCtrl(data, view, utils);
		return newCtrl
	}
})()

export { userCtrl }
