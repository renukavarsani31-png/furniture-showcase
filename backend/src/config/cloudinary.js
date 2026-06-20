const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadToCloudinary(file, folder = 'projects') {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: `furniture-showcase/${folder}`, resource_type: 'image' },
      (error, result) => {
        if (error) return reject(error);
        resolve({ filename: result.public_id, url: result.secure_url });
      }
    );
    streamifier.createReadStream(file.buffer).pipe(stream);
  });
}

async function deleteFromCloudinary(publicId) {
  await cloudinary.uploader.destroy(publicId);
  return true;
}

module.exports = { uploadToCloudinary, deleteFromCloudinary };
