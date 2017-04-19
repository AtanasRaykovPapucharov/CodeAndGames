'use strict';

const hashGenerator = (() => {
	class Hash {
		hashSha3(msg) {
			let hash = CryptoJS.SHA3(msg);
			console.log(hash.toString());
		}

		hashMd5(msg) {
			let hash = CryptoJS.MD5(msg);
			console.log(hash.toString(CryptoJS.enc.Base64));
		}
	}

	const newHash = new Hash();
	return newHash;
})();

export {
	hashGenerator
}