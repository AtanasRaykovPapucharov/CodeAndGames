'use strict';
import { loadFacebookSDK as loadFacebookSDK } from './scripts/utils/facebook-sdk-loder.js';
import { app as app } from './scripts/app.js';

$(() => {
	app.init;
	loadFacebookSDK.load();
});
