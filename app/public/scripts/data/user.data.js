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
			
			getTags() {
				return this.requester.get('/api/tags');
			}
		}

		let newData = new UserData(requester);
		return newData
	}
})()

export { userData }