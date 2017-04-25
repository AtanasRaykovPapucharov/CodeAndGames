'use strict';

const router = (() => {
	return (controller, utils) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
					controller.mainCtrl.showHome;
					controller.mainCtrl.getTags();
					controller.mainCtrl.checkHome();
				},
				'/change-password': () => { controller.mainCtrl.showChangePassword; },
				'/forgot-password': () => { controller.mainCtrl.showForgotPassword; },
				'/signin': () => {
					controller.mainCtrl.showSignIn;
				},
				'/signup': () => {
					controller.mainCtrl.showSignUp;
				},
				'/signout': () => {
					controller.userCtrl.signOut();
					appRouter.navigate('/home');
				},
				'/signin-send': () => {
					controller.userCtrl.signIn();
				},
				'/signup-send': () => {
					appRouter.navigate('/home');
					controller.userCtrl.signUp();
				},
				'/signup-after': () => {
					let cookie = utils.cookies.getCookieByName('current-user-app');
					let cookieValue = cookie.split('=')[1];
					if (cookie) {
						localStorage.setItem('current-user-app', cookieValue);
						appRouter.navigate('/profile');
						utils.notifier.success(`Welcome, ${cookieValue}!`);
					} else {
						appRouter.navigate('/signin');
						utils.notifier.warning(`Please, sign in first!`);
					}
				},
				'/profile': () => {
					let value = localStorage.getItem('current-user-app');

					if (value) {
						$('#log-forms-link').html('Sign out').attr('href', '#/signout');

						controller.mainCtrl.showHome;
						controller.userCtrl.profile;
					} else {
						utils.notifier.warning(`Please, sign in first!`);
						appRouter.navigate('/signin');
					}
				},
				'/about': () => {
					controller.mainCtrl.showAbout;
					controller.mainCtrl.getTags();
				},
				'/blog': () => {
					controller.blogCtrl.blogs;
					controller.mainCtrl.getTags();
				},
				'/blog/:id': (params) => {
					let blogId = params.id;
					controller.blogCtrl.blogById(blogId);
					controller.mainCtrl.getTags();
				},
				'/games': () => {
					controller.gamesCtrl.games;
					controller.mainCtrl.getTags();
				},
				'/game/:id': (params) => {
					let gameId = params.id;
					controller.gamesCtrl.gameById(gameId);
					controller.mainCtrl.getTags();
				},
				'/tournaments': () => {
					controller.mainCtrl.showTournaments;
					controller.mainCtrl.getTags();
				},
				'/add/blog': () => {
					if (localStorage.getItem('current-user-app')) {
						controller.mainCtrl.showAddFormBlog;
						controller.mainCtrl.getTags();
					} else {
						utils.notifier.warning(`Please, sign in first!`);
						appRouter.navigate('/signin');
					}
				},
				'/add/game': () => {
					if (localStorage.getItem('current-user-app')) {
						controller.mainCtrl.showAddFormGames;
						controller.mainCtrl.getTags();
					} else {
						utils.notifier.warning(`Please, sign in first!`);
						appRouter.navigate('/signin');
					}
				},
				'/contact-us': () => { },
				'/': () => {
					appRouter.navigate('/home');
				},
				'*': () => {
					appRouter.navigate('/home');
				}
			})
			.notFound(function () {
				alert('Error! Router not found!');
			})
			.resolve();
	}
})()

export {
	router
};
