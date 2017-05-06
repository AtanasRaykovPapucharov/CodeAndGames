'use strict';

const cloudinaryUploader = (() => {
	return (data, file) => {
		return data.getParams()
			.then((params) => {
				console.log(params);
				let CLOUDINARY_URL = params.cloudinary.CLOUDINARY_URL;
				let CLOUDINARY_UPLOAD_PRESET = params.cloudinary.CLOUDINARY_UPLOAD_PRESET;
				let formData = new FormData();

				formData.append('file', file);
				formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
				let dataObj = {
					CLOUDINARY_URL: CLOUDINARY_URL,
					formData: formData
				}
				return dataObj;
			})
			// .then((dataObj) => {
			// 	let r = data.postImage(dataObj.CLOUDINARY_URL, dataObj.formData)
			// 		.then((res) => {
			// 			return res;
			// 		});
			// 	return r;
			// })
			// .catch((err) => {
			// 	console.log(err);
			// })
	}
})();

export {
	cloudinaryUploader
};
