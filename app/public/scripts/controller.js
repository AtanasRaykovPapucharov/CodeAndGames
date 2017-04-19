
import { mainCtrl as mainCtrl } from './controllers/main.controller.js';
import { userCtrl as userCtrl } from './controllers/user.controller.js';
import { blogCtrl as blogCtrl } from './controllers/blog.controller.js';

const controller = (() => {
	return (data, view, utils) => {
		return {
			mainCtrl: userCtrl(data, view, utils),
			userCtrl: userCtrl(data, view, utils),
			blogCtrl: blogCtrl(data, view, utils)
		}
	}
})()

export {
	controller
};