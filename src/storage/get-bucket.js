const s3 = require('./init-S3-client');

// Example of fetching the name of a bucket.  Every Fleek account comes with a bucket

const getBucket = () => new Promise((resolve, reject) => {
  s3.listBuckets(function (err, data) {
    if (err) {
      console.log("Error when listing buckets", err);
      reject(err);
    } else {
      resolve(data.Buckets[0].Name);
    }
  });
});

getBucket().then((bucket) => { console.log('bucket:', bucket) });

module.exports = getBucket;