'use strict';

const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
					controller.mainCtrl.home;
					controller.mainCtrl.tags;
				},
				'/about': () => {
					controller.mainCtrl.about;
					controller.mainCtrl.tags;
				},
				'/blog': () => {
					controller.blogCtrl.blogs;
					controller.mainCtrl.tags;
				},
				'/blog/:id': (params) => {
					let blogId = params.id;
					controller.blogCtrl.blogById(blogId);
					controller.mainCtrl.tags;
				},
				'/games': () => {
					controller.gamesCtrl.games;
					controller.mainCtrl.tags;
				},
				'/game/:id': (params) => {
					let gameId = params.id;
					controller.gamesCtrl.gameById(gameId);
					controller.mainCtrl.tags;
				},
				'/tournaments': () => {
					controller.mainCtrl.tournaments;
					controller.mainCtrl.tags;
				},
				'/profile': () => {
					controller.userCtrl.profile;
					controller.mainCtrl.tags;
				},
				'/change-password': () => { controller.mainCtrl.changepassword; },
				'/forgot-password': () => { controller.mainCtrl.forgotpassword; },
				'/signin': () => { controller.mainCtrl.signin; },
				'/signup': () => { controller.mainCtrl.signup; },
				'/signout': () => { },
				'/login': () => { },
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
