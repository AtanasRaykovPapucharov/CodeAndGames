'use strict';

const validator = (() => {
	return (notifier) => {
		class Validator {
			constructor(notifier) {
				this.notifier = notifier;
				this.constantz = {
					emailReg: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					passwordReg: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
					usernameReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
					commentReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
				}
			}

			validateEmail(email) {
				let letters = this.constantz.emailReg;

				if (!email.match(letters)) {
					this.notifier.warning('E-mail must consist of letters and numbers, dot, symbol @ ');
					return false;
				}

				return true;
			}

			validatePassword(password) {
				let letters = this.constantz.passwordReg;

				if (!password.match(letters)) {
					this.notifier.warning('Password must contain at least 6 characters, including UPPER/lowercase and numbers');
					return false;
				}

				return true;

			}

			validateUsername(username) {
				let letters = this.constantz.usernameReg;

				if (!username.match(letters)) {
					this.notifier.warning('Username must consist of letters and numbers');
					return false;
				}

				if (username.length < 3 || username.length > 20 || !username) {
					this.notifier.warning('Username must be consist of min 3 symbols and max of 20 symbols');
					return false;
				}

				return true;
			}

			validateAge(age) {
				if (age < 0 || age > 120 || !age) {
					this.notifier.warning('Age must be a number between 0 and 120');
					return false;
				}

				return true;
			}

			validateComment(comment) {
				let letters = this.constantz.commentReg;

				if (comment.length < 20 || !comment.match(letters)) {
					this.notifier.warning('Comment must be minimum 20 symbols of letters and numbers');
					return false;
				}

				return true;
			}
		}

		const newValid = new Validator(notifier);
		return newValid;
	}
})()

export {
	validator
}
