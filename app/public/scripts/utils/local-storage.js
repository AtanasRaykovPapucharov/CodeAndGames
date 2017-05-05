'use strict';

const localStore = (() => {
	class LocalStore {
		constructor() {
			this._userData = 'app-user-data';
			this._userName = 'current-user-app';
			this._userKey = 'current-user-auth-key';
		}

		isLoggedIn() {
			return new Promise((reject, resolve) => {
				reject(!!localStorage.getItem(this._userName));
			}).then(res => { return res });
		}

		getUsername() {
			return new Promise((reject, resolve) => {
				reject(localStorage.getItem(this._userName));
			}).then(res => { return res });
		}

		getUserData() {
			return new Promise((reject, resolve) => {
				reject(localStorage.getItem(this._userData));
			}).then(res => { return res });
		}
	}

	const locSt = new LocalStore();
	return locSt;
})();

export {
	localStore
}