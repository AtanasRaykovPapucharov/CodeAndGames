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

		info(msg) {
			toastr.info(msg, 'INFO', { timeOut: 3000 });
		}

		successUntitle(msg) {
			toastr.success(msg, '', { timeOut: 5000 });
		}

		errorUntitle(msg) {
			toastr.error(msg, '', { timeOut: 5000 });
		}

		warningUntitle(msg) {
			toastr.warning(msg, '', { timeOut: 5000 });
		}

		infoUntitle(msg) {
			toastr.info(msg, '', { timeOut: 5000 });
		}
	}

	const notifier = new Notifier();
	return notifier
})();

export {
	toastrNotifier as notifier
}
