'use strict';

const auth = (() => {
	class Auth {
		isLoggedIn() {
			return new Promise((reject, resolve) => {
				reject(!!localStorage.getItem('username'));
			}).then((res) => {
				return res;
			});
		}
	}

	const newAuth = new Auth();
	return newAuth;
})();

export {
	auth
}