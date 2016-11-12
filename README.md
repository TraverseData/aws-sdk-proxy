# aws-sdk-proxy
Transparently add proxy support to the aws-sdk-js package

## Usage

```javascript
var AWS = require('aws-sdk-proxy'),
  s3 = new AWS.S3();

s3.getObject({});
```

## Description

`aws-sdk-proxy` will configure `aws-sdk` to use a proxy when either the `HTTPS_PROXY` or `https_proxy` environmental variables are defined. This package requires `proxy-agent` to be installed. It is not installed as part of `aws-sdk-proxy` because it's quite heavy and the proxy functionality might only be required in a development environment.
