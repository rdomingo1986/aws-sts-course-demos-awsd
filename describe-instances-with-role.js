const { getSecretValue } = require('./modules/get-secret-value-module.js');

const { assumeRole } = require('./modules/assume-role-module.js');

const { EC2Client } = require('./modules/ec2-client');

const util = require('util');

const run = async function () {
  try {
    const secret = JSON.parse(await getSecretValue());

    const credentials = process.argv[2] === 'user' ? secret : await assumeRole(secret);

    const ec2 = EC2Client(credentials);

    var response = await ec2.describeInstances({});
    
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();