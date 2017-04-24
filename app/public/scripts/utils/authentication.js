'use strict';

const auth = (() => {
	class Auth {
		constructor() {
			this._userName = 'current-user-app';
		}

		isLoggedIn() {
			return new Promise((reject, resolve) => {
				reject(!!localStorage.getItem(this._userName));
			});
		}

		getUsername() {
			return new Promise((reject, resolve) => {
				reject(localStorage.getItem(this._userName));
			});
		}
	}

	const newAuth = new Auth();
	return newAuth;
})();

export {
	auth
}