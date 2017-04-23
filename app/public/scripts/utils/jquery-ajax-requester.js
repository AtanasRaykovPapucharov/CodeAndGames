'use strict';

const ajaxRequester = (() => {
	class Requester {
		_sendAjax(method, url, data, options) {
			options = options || {};
			data = data || {};

			const headers = options.headers || {},
				contentType = options.contentType || 'application/json',
				callBack = options.callbackfunc;

			const promise = new Promise((resolve, reject) => {
				$.ajax(url, {
					method,
					contentType: contentType,
					data: JSON.stringify(data),
					headers,
					success: (response) => {
						resolve(response);
					},
					error: (err) => {
						reject(err);
					}
				});
			});

			return promise;
		}

		get(url, data, options) {
			return this._sendAjax('GET', url, data, options);
		}

		post(url, data, options) {
			return this._sendAjax('POST', url, data, options);
		}

		put(url, data, options) {
			return this._sendAjax('PUT', url, data, options);
		}
	}

	const req = new Requester();

	return req;
})();

export {
	ajaxRequester
};