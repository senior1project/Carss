const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "du0q31qw0",
  api_key: "614195552822938",
  api_secret: "F0oT98Q1bFlwWW-0CpgSarvVihI",
});

const cloudinaryUploadImg = (fileToUpload) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileToUpload,
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          });
        }
      }
    );
  });
};

module.exports = { cloudinaryUploadImg };
