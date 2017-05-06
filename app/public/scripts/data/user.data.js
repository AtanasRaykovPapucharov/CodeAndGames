'use strict';

import { ajaxRequesterAxios as axiosRequester } from '../utils/axios-ajax-requester.js';

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

			get params() {
				return new Promise((resolve, reject) => {
					$.get('./scripts/data/statics/constants.json', (data) => {
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
				return axiosRequester.post(url, options);
			}

			putImage(image) {
				const options = {
					data: {
						image: image,
						id: JSON.parse(localStorage.getItem('app-user-data'))._id
					}
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