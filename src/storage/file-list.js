const s3 = require('./init-S3-client');

// Listing files in the bucket. A bucket name is needed. See file get-bucket.js
const bucketName = 'tenamade-team-bucket'

const params = {
  Bucket: bucketName,
  MaxKeys: 20
};

s3.listObjectsV2(params, function (err, data) {
  if (err) {
      console.log("Error when listing objects", err);
  } else {
    // The public url of a file is constructed with the bucket name and key
    const fileURls = data.Contents.map(file => `https://${bucketName}.storage.fleek.co/${file.Key}`);
      console.log('fileNames:', fileURls);
  }
});