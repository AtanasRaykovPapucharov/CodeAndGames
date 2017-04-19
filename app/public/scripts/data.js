'use strict';


import { userData as userDataObj } from './data/user.data.js';
import { blogData as blogDataObj } from './data/blog.data.js';

const data = (() => {
	return (requester) => {
		return {
			userData: userDataObj(requester),
			blogData: userDataObj(requester)
		}
	}
})()

export {
	data
};