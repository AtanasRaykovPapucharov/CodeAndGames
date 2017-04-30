'use strict';

const auth = (() => {
	class Auth {
		constructor() {
			this._userName = 'current-user-name';
			this._userKey = 'current-user-auth-key';
		}

		isLoggedIn() {
			return new Promise((reject, resolve) => {
				reject(!!localStorage.getItem(this._userKey));
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