const { secretsManager } = require('./secrets-manager-client.js');

const util = require('util');

module.exports.getSecretValue = async function () {
  try {
    return (await secretsManager.getSecretValue({
      SecretId: 'awsd-demo-secrets-manager'
    })).SecretString;
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};