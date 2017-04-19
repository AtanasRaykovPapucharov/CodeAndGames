'use strict';

const cloudinaryUploader = (data, file) => {
	data
		.getCloudinaryParams()
		.then((params) => {
			let CLOUDINARY_URL = params.CLOUDINARY_URL;
			let CLOUDINARY_UPLOAD_PRESET = params.CLOUDINARY_UPLOAD_PRESET;

			let formData = new FormData();

			formData.append('file', file);
			formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
			let dataObj = {
				CLOUDINARY_URL: CLOUDINARY_URL,
				formData: formData
			}
			return dataObj;
		})
		.then((dataObj) => {
			let r = data.postImage(dataObj.CLOUDINARY_URL, dataObj.formData)
				.then((res) => {
					console.log(res);
					return res;
				});
			console.log(r);
			return r;
		})
		.catch((err) => {
			console.log(err);
		})
}

export {
	cloudinaryUploader
};
