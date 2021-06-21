const { STSClient } = require('./sts-client.js');

require('dotenv').config();

const util = require('util');

module.exports.assumeRole = async function (secret) {
  try {
    const sts = STSClient(secret);

    return (await sts.assumeRole({
      RoleArn: process.env.roleArn,
      RoleSessionName: 'awsddemo',
      DurationSeconds: 3600
    })).Credentials

  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};
