'use strict';

const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
					controller.mainCtrl.showHome;
					controller.mainCtrl.getTags();
					controller.mainCtrl.checkHome();
				},
				'/change-password': () => {
					controller.mainCtrl.showChangePassword;
				},
				'/forgot-password': () => {
					controller.mainCtrl.showForgotPassword;
				},
				'/signin': () => {
					controller.mainCtrl.showHome;
					controller.mainCtrl.showSignIn;
				},
				'/signup': () => {
					controller.mainCtrl.showHome;
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
					let hasCookie = controller.userCtrl.signUpAfter();
					if (!hasCookie) {
						controller.mainCtrl.showHome;
						appRouter.navigate('/signup');
					} else {
						appRouter.navigate('/profile');
					}
				},
				'/profile': () => {
					let isLogged = controller.userCtrl.profile();
					if (!isLogged) {
						controller.mainCtrl.showHome;
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
					let hasUser = controller.mainCtrl.pleaseSignIn();
					if (hasUser) {
						controller.mainCtrl.showAddFormBlog;
						controller.mainCtrl.getTags();
					} else {
						utils.notifier.warning(`Please, sign in first!`);
						appRouter.navigate('/signin');
					}
				},
				'/add/game': () => {
					let hasUser = controller.mainCtrl.pleaseSignIn();
					if (hasUser) {
						controller.mainCtrl.showAddFormGames;
						controller.mainCtrl.getTags();
					} else {
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
