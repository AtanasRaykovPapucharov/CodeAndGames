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
				'/about': () => {
					controller.mainCtrl.showAbout;
					controller.mainCtrl.getTags();
				},
				'/blog': () => {
					controller.blogCtrl.blogs;
					controller.mainCtrl.getTags();
				},
				'/blog/:id': (params) => {
					console.log(params);
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
				'/profile': () => {
					controller.userCtrl.profile;
					controller.mainCtrl.getTags();
				},
				'/contact-us': () => {
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
				},
				'/signin-send': () => {
					controller.userCtrl.signIn();
				},
				'/signup-send': () => {
					controller.userCtrl.signUp();
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
			.resolve();
	}
})()

export {
	router
};
