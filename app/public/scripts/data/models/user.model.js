const userModel = (() => {
	return (newUser) => {
		class UserModel {
			constructor(newUser) {
				this.email = newUser.email;
				this.name = newUser.name;
				this.hashedPass = newUser.hashedPass;
				this.token = '';
			}

			get email() {
				return this.email;
			}

			get name() {
				return this.name;
			}

			get hashedPass() {
				return this.hashedPass;
			}

			get token() {
				return this.token;
			}
			set token(token) {
				this.token = token;
			}

		}

		let newModel = new UserModel(newUser);
		return newModel
	}
})()

export { userModel }