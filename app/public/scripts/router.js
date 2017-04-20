'use strict';

const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => { controller.mainCtrl.home; },
				'/about': () => { controller.mainCtrl.about; },
				'/blog': () => { controller.blogCtrl.blogs; },
				'/blog/:id': (params) => {
					let blogId = params.id;
					controller.blogCtrl.blogById(blogId);
				},
				'/games': () => { },
				'/games/:id': (params) => {
					let gameId = params.id;
				},
				'/tournaments': () => { controller.mainCtrl.tournaments; },
				'/profile': () => { controller.userCtrl.profile; },
				'/change-password': () => { controller.mainCtrl.changepassword; },
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
