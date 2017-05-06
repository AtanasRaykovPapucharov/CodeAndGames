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
				const options = {
					data: user
				}

				return this.requester.post('/api/users', options);
			}

			loginUser(user) {
				const options = {
					data: user
				}

				return this.requester.put('/api/users', options);
			}

			//===============================================

			getParams() {
				return new Promise((resolve, reject) => {
					$.getJSON('./statics/constants.json', (data) => {
						resolve(data);
					});
				});
			}

			postImage(url, data) {
				const options = {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'X-Requested-With': 'XMLHttpRequest'
					},
					data: data
				}
				return this.requester.put('/api/users/image', options);
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

export { userData }