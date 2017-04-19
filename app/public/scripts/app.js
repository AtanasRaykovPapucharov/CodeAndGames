'use strict';

import { ajaxRequester as requester } from './utils/jquery-ajax-requester.js';
import { data as dataObj } from './data.js';

import { templateLoader as templateLoader } from './utils/handlebars-template-loader.js';
import { view as viewObj } from './view.js';

import { notifier as notifier } from './utils/toastr-notifier.js';
import { validator as validator } from './utils/validator.js';
import { hashGenerator as hash } from './utils/hash-generator.js';
import { storage as storage } from './utils/storage.js';
import { cloudinaryUploader as cloudinary } from './utils/cloudinary-uploader.js';

import { controller as controller } from './controller.js';

import { router as router } from './router.js';

const app = {
	init: $(() => {
		let data = dataObj(requester);
		let view = viewObj(templateLoader);
		let utils = {
			notifier: notifier,
			validator: validator,
			hash: hash,
			storage: storage,
			cloudinary: cloudinary
		}
		let ctrl = controller(data, view, utils);

		// console.log(data);
		// console.log(view);
		// console.log(utils);
		// console.log(ctrl);

		view.header('#header', {});
		view.footer('#footer', {});

		router(ctrl);
	})
}

export { app }
