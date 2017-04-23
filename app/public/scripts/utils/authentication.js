'use strict';

const auth = (() => {
	class Auth {
		isLoggedIn() {
			return new Promise((reject, resolve) => {
				reject(!!localStorage.getItem('username'));
			});
		}

		getUsername() {
			return new Promise((reject, resolve) => {
				reject(localStorage.getItem('username'));
			});
		}
	}

	const newAuth = new Auth();
	return newAuth;
})();

export {
	auth
}