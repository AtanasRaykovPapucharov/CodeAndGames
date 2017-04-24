'use strict';

const cookies = (() => {
	return {
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
						cookie = cookie.substring(j);
						break;
					}
				}

				if (cookie.startsWith(name + "=")) {
					return cookie;
				}
			}
		}
	}
})();

export {
	cookies
};
