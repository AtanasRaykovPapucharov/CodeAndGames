
const view = (() => {
	return (templateLoader) => {
		class View {
			constructor(templateLoader) {
				this.templateLoader = templateLoader;
			}

			header(selector, data) {
				let template = '../components/header/header.html';
				this.templateLoader.load(selector, template, data);
			}

			footer(selector, data) {
				let template = '../components/footer/footer.html';
				this.templateLoader.load(selector, template, data);
			}
		}

		const newView = new View(templateLoader);
		return newView;
	}
})()

export {
	view
};