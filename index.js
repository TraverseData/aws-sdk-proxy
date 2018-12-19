var AWS = require('aws-sdk');

var proxy = process.env['HTTPS_PROXY'] || process.env['https_proxy'];
var isProduction = typeof process.env['AWS_ENV_NAME'] === 'undefined';
if (isProduction && proxy) {
  try {
    var agent = require('proxy-agent');
    AWS.config.update({
      httpOptions: {
        agent: agent(proxy),
      },
    });
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') console.error('Install proxy-agent for proxy support.');
    else throw e;
  }
}

module.exports = AWS;
