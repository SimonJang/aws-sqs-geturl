# aws-sqs-geturl [![Build Status](https://travis-ci.org/SimonJang/aws-sqs-geturl.svg?branch=master)](https://travis-ci.org/SimonJang/aws-sqs-geturl)

> Retrieve [SQS](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html) url

## Install

```
$ npm install --save aws-sqs-geturl
```


## Usage

```js
const awsGetSqsUrl = require('aws-sqs-geturl');

awsGetSqsUrl('somequeue');
//=> https://sqs.eu-west-1.amazonaws.com/123456789111/somequeue

awsGetSqsUrl('anotherqueue', {awsAccountId: '123456789012'})
// => https://sqs.us-west-1.amazonaws.com/123456789012/anotherqueue
```

## API

### awsGetSqsUrl(input, [options])

#### input

Type: `string`

Name of queue

#### options

Type: `object`

Optional.<br/>
Options object for parameters. Has property `awsAccountId`.

##### options.awsAccountId

Type: `string`

Root AWS account id. When undefined it's using the callers id.

## License

MIT © [Simon Jang](https://github.com/SimonJang)
