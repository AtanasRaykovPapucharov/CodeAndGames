'use strict';

const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
					controller.mainCtrl.showHome;
					controller.mainCtrl.getTags();
				},
				'/change-password': () => {
					controller.mainCtrl.showChangePassword;
				},
				'/forgot-password': () => {
					controller.mainCtrl.showForgotPassword;
				},
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
					appRouter.navigate('/home');
				},
				'/signup-send': () => {
					controller.userCtrl.signUp();
					appRouter.navigate('/home');
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
				'/add/blog': () => {
					let hasUser = controller.mainCtrl.pleaseSignIn();
					if (hasUser) {
						controller.blogCtrl.showAddFormBlog;
						controller.mainCtrl.getTags();
					} else {
						appRouter.navigate('/signin');
					}
				},
				'/post/blog': () => {
					controller.blogCtrl.newBlog();
					appRouter.navigate('/blog');
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
				'/add/game': () => {
					let hasUser = controller.mainCtrl.pleaseSignIn();
					if (hasUser) {
						controller.gamesCtrl.showAddFormGames;
						controller.mainCtrl.getTags();
					} else {
						appRouter.navigate('/signin');
					}
				},
				'/post/game': () => {
					controller.gamesCtrl.newGame();
					appRouter.navigate('/games');
				},
				'/tournaments': () => {
					controller.mainCtrl.showTournaments;
					controller.mainCtrl.getTags();
				},
				'/contact-us': () => {
					controller.userCtrl.contactUs();
				},
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
			.on({

			})
			.resolve();
	}
})()

export {
	router
};
