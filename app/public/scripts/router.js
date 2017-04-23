'use strict';

const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/change-password': () => { controller.mainCtrl.showChangePassword; },
				'/forgot-password': () => { controller.mainCtrl.showForgotPassword; },
				'/signin': () => { controller.mainCtrl.showSignIn; },
				'/signup': () => { controller.mainCtrl.showSignUp; },
				'/signout': () => { controller.userCtrl.signOut(); },
				'/signin-send': () => {
					controller.userCtrl.signIn();
					appRouter.navigate('/home');
				},
				'/signup-send': () => {
					controller.userCtrl.signUp();
					appRouter.navigate('/home');
				},
				'/after-signup': () => {
					let username = JSON.parse(localStorage.getItem('app-user-data')).username;
					localStorage.setItem('username', username);
					appRouter.navigate('/profile');
				},
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
				'/add/blog': () => { controller.mainCtrl.showAddFormBlog; },
				'/add/game': () => { controller.mainCtrl.showAddFormGames; },
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
