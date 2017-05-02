# aws-sqs-geturl [![Build Status](https://travis-ci.org/SimonJang/aws-sqs-geturl.svg?branch=master)](https://travis-ci.org/SimonJang/aws-sqs-geturl)

> Retrieve [SQS](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html) url


## Install

```
$ npm install --save aws-sqs-geturl
```


## Usage

```js
const awsGetSqsUrl = require('aws-sqs-geturl');

awsGetSqsUrl('somequeue').then(url => {
	console.log(url);
	//=> https://sqs.eu-west-1.amazonaws.com/123456789111/somequeue
});

awsGetSqsUrl('anotherqueue', {awsAccountId: '123456789012'}).then(url => {
	console.log(url);
	//=> https://sqs.us-west-1.amazonaws.com/123456789012/anotherqueue
});
```


## API

### awsGetSqsUrl(queueName, [options])

Returns a Promise for the queue URL.

#### queueName

Type: `string`

Name of queue

#### options

##### options.awsAccountId

Type: `string`<br>
Default: caller account

AWS account ID of the account that created the queue.


## License

MIT © [Simon Jang](https://github.com/SimonJang)
