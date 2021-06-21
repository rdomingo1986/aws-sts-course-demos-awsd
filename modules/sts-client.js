const { STS } = require('@aws-sdk/client-sts');

module.exports.STSClient = function (secret) {
  return new STS({
    credentials: {
      accessKeyId: secret.AccessKeyId,
      secretAccessKey: secret.SecretAccessKey
    },
    region: 'us-east-1'
  });
};