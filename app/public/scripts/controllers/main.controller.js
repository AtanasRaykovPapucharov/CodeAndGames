'use strict';

const mainCtrl = (() => {
	return (data, view, utils) => {
		class MainCtrl {
			constructor(data, view, utils) {
				this.data = data;
				this.view = view;
				this.utils = utils;
			}

			get home() {
				return this.view.home('#content', {})
			}

			get about() {
				return this.view.about('#content', {})
			}

			get tournaments() {
				return this.view.tournaments('#content', {})
			}

			get signin() {
				return this.view.signin('#content-aside', {})
			}

			get signup() {
				return this.view.signup('#content-aside', {})
			}

			get changepassword() {
				return this.view.changePass('#content-aside', {})
			}

			get forgotpassword() {
				return this.view.forgotPass('#content-aside', {})
			}
		}

		let newCtrl = new MainCtrl(data, view, utils);
		return newCtrl
	}
})()

export { mainCtrl }