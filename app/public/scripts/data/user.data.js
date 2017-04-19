'use strict';

const userData = (() => {
	return (requester) => {
		class UserData {
			constructor(requester) {
				this.requester = requester;
			}

			getUsers() {
				return this.requester.get('/api/users');
			}
		}

		let newData = new UserData(requester);
		return newData
	}
})()

export { userData }