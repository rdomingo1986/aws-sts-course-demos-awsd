const { STS } = require('@aws-sdk/client-sts');

require('dotenv').config();

const sts = new STS({
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
  },
  region: 'us-east-1'
});

const util = require('util');

const run = async function () {
  try {
    var response = await sts.assumeRole({
      RoleArn: process.env.roleArn,
      RoleSessionName: 'awsddemo',
      DurationSeconds: 3600
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();