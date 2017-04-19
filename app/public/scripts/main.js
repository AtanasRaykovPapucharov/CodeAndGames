'use strict';

import { ajaxRequester as requester } from './utils/jquery-ajax-requester.js';
import { templateLoader as templateLoader } from './utils/handlebars-template-loader.js';
import { notifier as notifier } from './utils/toastr-notifier.js';

import { data as dataObj } from './data.js';
import { view as viewObj } from './view.js';
import { controller as controller } from './controller.js';

import { router as router } from './router.js';

const main = {
	init: $(() => {
		let data = dataObj(requester);
		let view = viewObj(templateLoader);
		let utils = {
			notifier: notifier
		}
		let ctrl = controller(data, view, utils);

		console.log(data);
		console.log(view);
		console.log(utils);
		console.log(ctrl);

		view.header('#header', {});
		view.footer('#footer', {});

		router(ctrl);
	})
}

export { main }
