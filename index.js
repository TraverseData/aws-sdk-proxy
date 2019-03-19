var AWS = require('aws-sdk');

var proxy = process.env['HTTPS_PROXY'] || process.env['https_proxy'] || process.env['http_proxy'];
var timeout = process.env['AWS_HTTP_TIMEOUT'] || 240000;
var connectionTimeout = process.env['AWS_HTTP_CONNECTION_TIMEOUT'] || 240000;

var isProduction = (typeof process.env['NODE_ENV'] !== 'undefined' && process.env['NODE_ENV'] === 'production');
if (isProduction && proxy) {
  try {
    AWS.config.update({
      httpOptions: {
        proxy: proxy,
        timeout: timeout,
        connectionTimeout: connectionTimeout
      },
    });
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') console.error('Install proxy-agent for proxy support.');
    else throw e;
  }
}

module.exports = AWS;
