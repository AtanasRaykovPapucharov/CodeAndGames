'use strict';

const userData = (() => {
	return (requester) => {
		class UserData {
			constructor(requester) {
				this.requester = requester;
			}

			//===============================================

			getUsers() {
				return this.requester.get('/api/users');
			}

			newUser(user) {
				return this.requester.put('/api/users', user);
			}

			loginUser(user) {
				return this.requester.post('/api/users', user);
			}

			//===============================================

			getTags() {
				return this.requester.get('/api/tags');
			}
		}

		let newData = new UserData(requester);
		return newData;
	}
})()
