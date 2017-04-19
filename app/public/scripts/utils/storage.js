'use strict';

const storage = (() => {
	return {
		localStore: {
			deleteLocals: () => {
				localStorage.clear();
				return this;
			},
			setLocal: (name, value) => {
				localStorage.setItem(name, value);
				return this;
			},
			getLocal: (name) => {
				return localStorage.getItem(name);
			}
		},
		cookieStore: {
			setCookie: (name, value, minutes) => {
				let date = new Date();

				date.setTime(date.getTime() + (minutes * 60 * 1000));

				let expires = "; expires=" + date.toGMTString();

				document.cookie = name + "=" + value + expires + "; path=/";
			},

			getCookieByName: (name) => {
				let allCookies = document.cookie.split(";");

				for (let i = 0; i < allCookies.length; i += 1) {
					let cookie = allCookies[i];
					let trailingZeros = 0;

					for (let j = 0; j < cookie.length; j += 1) {
						if (cookie[j] !== " ") {
							break;
						}
					}
					cookie = cookie.substring(j);

					if (cookie.startsWith(name + "=")) {
						return cookie;
					}
				}
			}
		}
	}
})();

export {
	storage
};
