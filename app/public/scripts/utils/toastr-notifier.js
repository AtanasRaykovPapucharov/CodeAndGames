'use strict';

const toastrNotifier = (() => {
	class Notifier {

		success(msg) {
			toastr.success(msg, 'SUCCESS', { timeOut: 3000 });
		}

		error(msg) {
			toastr.error(msg, 'ERROR', { timeOut: 3000 });
		}

		warning(msg) {
			toastr.warning(msg, 'WARNING', { timeOut: 3000 });
		}
	}

	const notifier = new Notifier();
	return notifier
})();

export {
	toastrNotifier as notifier
}
