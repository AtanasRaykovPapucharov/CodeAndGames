'use strict';

const userCtrl = (() => {
	return (data, view, utils) => {
		class UserCtrl {
			constructor(data, view, utils) {
				this.view = view;
				this.data = data;
				this.utils = utils;
			}

			get profile() {
				return this.view.profile('#content-aside', {})
			}

			sigOut() {
			}

			sigIn() {
			}
			
			sigUp() {
			}
		}

		let newCtrl = new UserCtrl(data, view, utils);
		return newCtrl
	}
})()

export { userCtrl }