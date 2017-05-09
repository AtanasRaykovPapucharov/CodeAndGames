'use strict';

const view = (() => {
	return (templateLoader) => {
		class View {
			constructor(templateLoader) {
				this.templateLoader = templateLoader;
			}

			//===============================================================================================//

			objectCollection(selector, data) {
				let template = './components/object-collection/object-collection.html';
				return this.templateLoader.load(selector, template, data);
			}

			objectSingle(selector, data) {
				let template = './components/object-single/object-single.html';
				return this.templateLoader.load(selector, template, data);
			}

			//===============================================================================================//

			header(selector, data) {
				let template = './components/header/header.html';
				return this.templateLoader.load(selector, template, data);
			}

			footer(selector, data) {
				let template = './components/footer/footer.html';
				return this.templateLoader.load(selector, template, data);
			}

			//===============================================================================================//

			home(selector, data) {
				let template = './components/home/home.html';
				return this.templateLoader.load(selector, template, data);
			}

			about(selector, data) {
				let template = './components/about/about.html';
				return this.templateLoader.load(selector, template, data);
			}

			//===============================================================================================//

			chess(selector, data) {
				let template = './games/chess/chess.html';
				return this.templateLoader.load(selector, template, data);
			}

			//===============================================================================================//

			aside(selector, data) {
				let template = './components/aside/aside.html';
				return this.templateLoader.load(selector, template, data);
			}

			profile(selector, data) {
				let template = './components/profile/profile.html';
				return this.templateLoader.load(selector, template, data);
			}

			contactUs(selector, data) {
				let template = './components/contact-us/contactus.html';
				return this.templateLoader.load(selector, template, data);
			}

			signin(selector, data) {
				let template = './components/signin/signin.html';
				return this.templateLoader.load(selector, template, data);
			}

			signup(selector, data) {
				let template = './components/signup/signup.html';
				return this.templateLoader.load(selector, template, data);
			}

			changePass(selector, data) {
				let template = './components/change-password/change-pass.html';
				return this.templateLoader.load(selector, template, data);
			}

			forgotPass(selector, data) {
				let template = './components/forgot-password/forgot-pass.html';
				return this.templateLoader.load(selector, template, data);
			}

			addForm(selector, data) {
				let template = './components/add-form/add.html';
				return this.templateLoader.load(selector, template, data);
			}
		}

		const newView = new View(templateLoader);
		return newView;
	}
})();

export {
	view
};