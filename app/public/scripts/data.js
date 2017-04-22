'use strict';

import { userModel as userModel } from './data/models/user.model.js';
import { userData as userDataObj } from './data/user.data.js';

import { blogModel as blogModel } from './data/models/blog.model.js';
import { blogData as blogDataObj } from './data/blog.data.js';

import { gameModel as gameModel } from './data/models/game.model.js';
import { gamesData as gamesDataObj } from './data/games.data.js';




const data = (() => {
	return (requester, validator) => {
		return {
			userData: userDataObj(requester, validator, userModel),
			blogData: blogDataObj(requester, validator, blogModel),
			gamesData: gamesDataObj(requester, validator, gameModel)
		}
	}
})();

export {
	data
};
