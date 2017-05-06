'use strict';

import { localStore as localStore } from './utils/local-storage.js';
import { notifier as notifier } from './utils/toastr-notifier.js';
import { validator as validator } from './utils/validator.js';
import { hashGenerator as hash } from './utils/hash-generator.js';
import { cookies as cookies } from './utils/cookies.js';
import {cloudinaryUploader as cloudinaryUploader } from './utils/cloudinary-uploader.js';

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
			notifier: notifier,
			validator: validator(notifier),
			hash: hash,
			templateLoader: templateLoader,
			cookies: cookies,
			localStore: localStore,
			cloudinary: cloudinaryUploader(data)
		}
		const ctrl = controller(data, view, utils);

		const currentUser = localStorage.getItem('app-user-data');
		const user = JSON.parse(currentUser);

		let username, image;

		if (currentUser) {
			username = user.username;
			image = user.image;
		}

		view.header('#header', { image: image });
		view.footer('#footer', {});

		let isLoggedNow = !!localStorage.getItem('current-user-app');
		if (isLoggedNow) {
			$('#log-forms-link').html('Sign out').attr('href', '#/signout');
		}

		router(ctrl);
	})
}

export { app }
