
const view = (() => {
	return (templateLoader) => {
		class View {
			constructor(templateLoader) {
				this.templateLoader = templateLoader;
			}

			objectCollection(selector, data) {
				let template = './components/object-collection/object-collection.html';
				this.templateLoader.load(selector, template, data);
			}

			objectSingle(selector, data) {
				let template = './components/object-single/object-single.html';
				this.templateLoader.load(selector, template, data);
			}

			header(selector, data) {
				let template = './components/header/header.html';
				this.templateLoader.load(selector, template, data);
			}

			footer(selector, data) {
				let template = './components/footer/footer.html';
				this.templateLoader.load(selector, template, data);
			}

			home(selector, data) {
				let template = './components/home/home.html';
				this.templateLoader.load(selector, template, data);
			}

			aside(selector, data) {
				let template = './components/aside/aside.html';
				this.templateLoader.load(selector, template, data);
			}
			
			signin(selector, data) {
				let template = './components/signin/signin.html';
				this.templateLoader.load(selector, template, data);
			}
			
			signup(selector, data) {
				let template = './components/signup/signup.html';
				this.templateLoader.load(selector, template, data);
			}
			
			changePass(selector, data) {
				let template = './components/change-password/change-pass.html';
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