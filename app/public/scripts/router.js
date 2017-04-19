
const router = (() => {
	return (controller) => {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
				},
				'/about': () => {
				},
				'/blog': () => {
					controller.blogCtrl.blogs;
				},
				'/blog/:id': (params) => {
					let blogId = params.id;
					controller.blogCtrl.blogById(blogId);
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
