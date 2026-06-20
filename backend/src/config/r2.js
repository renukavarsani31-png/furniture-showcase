const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

// Initialize R2 client (S3-compatible)
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME;
const PUBLIC_URL = process.env.R2_PUBLIC_URL;

/**
 * Upload file to R2
 */
async function uploadToR2(file, folder = 'projects') {
  const timestamp = Date.now();
  const filename = `${folder}/${timestamp}-${file.originalname.replace(/\s+/g, '-')}`;
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: filename,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  await r2Client.send(command);

  return {
    filename,
    url: `${PUBLIC_URL}/${filename}`,
  };
}

/**
 * Delete file from R2
 */
async function deleteFromR2(key) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  await r2Client.send(command);
  return true;
}

/**
 * Generate signed URL for private files (if needed)
 */
async function getSignedUrlFromR2(key, expiresIn = 3600) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  const url = await getSignedUrl(r2Client, command, { expiresIn });
  return url;
}

module.exports = {
  uploadToR2,
  deleteFromR2,
  getSignedUrlFromR2,
  r2Client,
};
