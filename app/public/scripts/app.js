'use strict';

import { auth as auth } from './utils/authentication.js';
import { notifier as notifier } from './utils/toastr-notifier.js';
import { validator as validator } from './utils/validator.js';
import { hashGenerator as hash } from './utils/hash-generator.js';
import { cookies as cookies } from './utils/cookies.js';
import { cloudinaryUploader as cloudinary } from './utils/cloudinary-uploader.js';

import { ajaxRequester as requester } from './utils/jquery-ajax-requester.js';
import { data as dataObj } from './data.js';

import { templateLoader as templateLoader } from './utils/handlebars-template-loader.js';
import { view as viewObj } from './view.js';

import { controller as controller } from './controller.js';

import { router as router } from './router.js';

const app = {
	init: $(() => {
		const data = dataObj(requester, validator(notifier));
		const view = viewObj(templateLoader);
		const utils = {
			auth: auth,
			notifier: notifier,
			validator: validator(notifier),
			hash: hash,
			cookies: cookies,
			cloudinary: cloudinary
		}
		const ctrl = controller(data, view, utils);

		view.header('#header', {});
		view.footer('#footer', {});

		let isLoggedNow = !!localStorage.getItem('current-user-app');
		if (isLoggedNow) {
			$('#log-forms-link').html('Sign out').attr('href', '#/signout');
		}

		router(ctrl);
	})
}

export { app }
