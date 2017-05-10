'use strict';

const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
					controller.mainCtrl.showHome;
					controller.mainCtrl.getAllTags();
				},
				'/about': () => {
					controller.mainCtrl.showAbout;
					controller.mainCtrl.getAllTags();
				},

				//=====================================================//

				'/tag/blog/:value': (params) => {
					const tag = params.value;
					controller.blogCtrl.getBlogsWithTag(tag);
				},
				'/tag/game/:value': (params) => {
					const tag = params.value;
					controller.gamesCtrl.getGamesWithTag(tag);
				},
				'/tag/all/:value': (params) => {
					const tag = params.value;
					controller.mainCtrl.getAllWithTag(tag);
				},

				//=====================================================//

				'/profile': () => {
					let isLogged = controller.profileCtrl.profile();
					if (!isLogged) {
						controller.mainCtrl.showHome;
						appRouter.navigate('/signin');
					}
					controller.userCtrl.userInterests;
				},
				'/upload-image': () => {
					controller.profileCtrl.imageUpload()
						.then(() => {
							appRouter.navigate('/home');
							//appRouter.navigate('/profile');
						})
				},

				//=====================================================//

				'/contact-us': () => {
					controller.userCtrl.showContactUs();
				},
				'/change-password': () => {
					controller.userCtrl.showChangePassword();
				},
				'/forgot-password': () => {
					controller.userCtrl.showForgotPassword();
				},

				'/contact-us-btn': () => {
					controller.userCtrl.contactUs();
					appRouter.navigate('/home');
				},
				'/change-password-btn': () => {
					controller.userCtrl.changePassword();
					appRouter.navigate('/signout');
				},
				'/forgot-password-btn': () => {
					controller.userCtrl.forgotPassword();
					appRouter.navigate('/signin');
				},

				//=====================================================//

				'/game/chess': () => {
					controller.gamesCtrl.showChess();
				},

				//=====================================================//

				'/signin': () => {
					controller.userCtrl.showSignIn();
				},
				'/signup': () => {
					controller.userCtrl.showSignUp();
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

				//=====================================================//

				'/blog': () => {
					controller.blogCtrl.blogs;
					controller.mainCtrl.getBlogTags();
				},
				'/blog/:id': (params) => {
					let blogId = params.id;
					controller.blogCtrl.blogById(blogId);
					controller.mainCtrl.getBlogTags();
				},
				'/add/blog': () => {
					let hasUser = controller.mainCtrl.pleaseSignIn();
					if (hasUser) {
						controller.blogCtrl.showAddFormBlog;
						controller.mainCtrl.getBlogTags();
					} else {
						appRouter.navigate('/signin');
					}
				},
				'/post/blog': () => {
					controller.blogCtrl.newBlog();
					appRouter.navigate('/blog');
				},
				'/add-comment/blog/:id': (params) => {
					const commentId = params.id;
					controller.blogCtrl.commentBlogById(commentId);
					appRouter.navigate(`/blog/${commentId}`);
				},
				'/upload-image': () => {
					controller.mainCtrl.postImage();
				},

				//============================================//

				'/add-comment/game/:id': (params) => {
					const commentId = params.id;
					controller.gamesCtrl.commentGameById(commentId);
					appRouter.navigate(`/game/${commentId}`);
				},
				'/games': () => {
					controller.gamesCtrl.games;
					controller.mainCtrl.getGameTags();
				},
				'/game/:id': (params) => {
					let gameId = params.id;
					controller.gamesCtrl.gameById(gameId);
					controller.mainCtrl.getGameTags();
				},
				'/add/game': () => {
					let hasUser = controller.mainCtrl.pleaseSignIn();
					if (hasUser) {
						controller.gamesCtrl.showAddFormGames;
						controller.mainCtrl.getGameTags();
					} else {
						appRouter.navigate('/signin');
					}
				},
				'/post/game': () => {
					controller.gamesCtrl.newGame();
					appRouter.navigate('/games');
				},

				//============================================//

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
