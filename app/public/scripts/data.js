'use strict';

const data = (() => {
	return (requester) => {
		class Data {
			constructor(requester) {
				this.requester = requester;
			}

			getBlogs() {
				return this.requester.get('/api/blogs');
			}
		}

		let newData = new Data(requester);
		return newData
	}
})()

export { data }