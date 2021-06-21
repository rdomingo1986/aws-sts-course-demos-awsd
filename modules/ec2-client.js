const { EC2 } = require('@aws-sdk/client-ec2');

module.exports.EC2Client = function (credentials) {
  var creds = {
    accessKeyId: credentials.AccessKeyId,
    secretAccessKey: credentials.SecretAccessKey
  };
  if(credentials.SessionToken != undefined) {
    creds['sessionToken'] = credentials.SessionToken;
  }
  return new EC2({
    credentials: creds,
    region: 'us-east-1'
  });
};