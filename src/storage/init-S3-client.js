const AWS = require('aws-sdk');

// An api key and secret is required to initialize the S3 client
// There are two ways to get api keys and they are detailed there:
// https://docs.fleek.co/StorageSDK/GettingApiKeys

// In this particular example, the key and secrets are saved as
// environment variables
require('dotenv').config();
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.REACT_APP_API_KEY,
    secretAccessKey: process.env.REACT_APP_API_SECRET,
    endpoint: 'https://storageapi.fleek.co',
    region: 'us-east-1',
    s3ForcePathStyle: true
 });

module.exports = s3;