'use strict';

import { mainCtrl as mainCtrl } from './controllers/main.controller.js';
import { userCtrl as userCtrl } from './controllers/user.controller.js';
import { blogCtrl as blogCtrl } from './controllers/blog.controller.js';
import { gamesCtrl as gamesCtrl } from './controllers/games.controller.js';
import { profileCtrl as profileCtrl } from './controllers/profile.controller.js';

const controller = (() => {
	return (data, view, utils) => {
		return {
			mainCtrl: mainCtrl(data, view, utils),
			userCtrl: userCtrl(data, view, utils),
			blogCtrl: blogCtrl(data, view, utils),
			gamesCtrl: gamesCtrl(data, view, utils),
			profileCtrl: profileCtrl(data, view, utils)
		}
	}
})()

export {
	controller
};