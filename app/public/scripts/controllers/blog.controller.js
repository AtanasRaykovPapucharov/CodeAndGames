const blogCtrl = (() => {
	return (data, view, utils) => {
		class BlogCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data;
				this.utils = utils;
			}
		}

		let newCtrl = new BlogCtrl(data, view, utils);
		return newCtrl
	}
})()

export { blogCtrl }