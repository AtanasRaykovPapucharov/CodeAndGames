const userCtrl = (() => {
	return (data, view, utils) => {
		class UserCtrl {
			constructor(data, view, utils) {
			}
		}

		let newCtrl = new UserCtrl(data, view, utils);
		return newCtrl
	}
})()

export { userCtrl }