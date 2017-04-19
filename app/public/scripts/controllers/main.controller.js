const mainCtrl = (() => {
	return (data, view, utils) => {
		class MainCtrl {
			constructor(data, view, utils) {
			}
		}

		let newCtrl = new MainCtrl(data, view, utils);
		return newCtrl
	}
})()

export { mainCtrl }