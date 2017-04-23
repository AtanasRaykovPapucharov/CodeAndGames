'use strict';

import { userData as userDataObj } from './data/user.data.js';
import { blogData as blogDataObj } from './data/blog.data.js'
import { gamesData as gamesDataObj } from './data/games.data.js';

const data = (() => {
	return (requester) => {
		return {
			userData: userDataObj(requester),
			blogData: blogDataObj(requester),
			gamesData: gamesDataObj(requester)
		}
	}
})();

export {
	data
};
