'use strict';

const userData = (() => {
	return (requester, validator, userModel) => {
		class UserData {
			constructor(requester, validator, userModel) {
				this.requester = requester;
				this.validator = validator;
			}

			getUsers() {
				return this.requester.get('/api/users');
			}

			getTags() {
				return this.requester.get('/api/tags');
			}
		}

		let newData = new UserData(requester, validator, userModel);
		return newData;
	}
})()

export { userData }