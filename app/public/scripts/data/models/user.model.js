const userModel = (() => {
	return (newUser, validator) => {
		class UserModel {
			constructor(newUser) {
				this.name = newUser.name || '';
				this.email = newUser.email || '';
				this.hashedPass = newUser.hashedPass || '';
				this.key = '';
				this.token = '';
				this.image = '';
				this.age = 0;
				this.interests = [];
				this.blogs = [];
				this.games = [];
			}

			get userObject() {
				return {
					name: this.name,
					email: this.email,
					hashedPassword: this.hashedPass,
					key: this.key,
					token: this.token,
					image: this.image,
					age: this.age,
					interests: this.interests,
					blogs: this.blogs,
					games: this.games
				}
			}

			get token() {
				return this.token;
			}
			set token(token) {
				this.token = token;
			}

			get image() {
				return this.image;
			}
			set image(image) {
				this.image = image;
			}

			get age() {
				return this.age;
			}
			set age(age) {
				this.age = age;
			}
		}

		let newModel = new UserModel(newUser);
		return newModel
	}
})()

export { userModel }