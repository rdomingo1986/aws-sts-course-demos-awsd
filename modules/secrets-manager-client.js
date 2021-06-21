const { SecretsManager } = require('@aws-sdk/client-secrets-manager');

const secretsManager = new SecretsManager({
  region: 'us-east-1'
});

module.exports.secretsManager = secretsManager;