const userData = (requester) => {
	class UserData {
		get userDataTest() {
			return true;
		}
	}

	let newData = new UserData(requester);
	return newData
}

export { userData }