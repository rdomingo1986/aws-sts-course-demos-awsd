const { EC2 } = require('@aws-sdk/client-ec2');

const ec2 = new EC2({
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
  },
  region: 'us-east-1'
});

const util = require('util');

const run = async function () {
  try {
    var response = await ec2.describeInstances({});
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();