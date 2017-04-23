'use strict';

const hashGenerator = (() => {
	class Hash {
		hashSha3(msg) {
			return CryptoJS.SHA3(msg).toString();
		}

		hashMd5(msg) {
			return CryptoJS.MD5(msg).toString();
		}
	}

	const newHash = new Hash();
	return newHash;
})();

export {
	hashGenerator
}