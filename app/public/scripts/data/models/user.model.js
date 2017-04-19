const userModel = (newUser) => {
	class UserModel {
		constructor(newUser) {  //email, name, password, passwordKey, token
			this.email = newUser.email;
			this.name = newUser.name;
		}

	}

	let newModel = new UserModel(requester);
	return newModel
}

export { userModel }