'use strict'
const AWS = require('aws-sdk');
const sinon = require('sinon');

class SQS {
	getQueueUrl(opts, cb) {
		if(opts['QueueName'] !== 'demoqueue'){
			cb(undefined, null)
		}
		const accountId = opts.QueueOwnerAWSAccountId || '123456789111';
		cb(undefined, {QueueUrl: `https://sqs.eu-west-1.amazonaws.com/${accountId}/${opts.QueueName}`})
	}
}

const sqs = new SQS()

AWS.SQS = function () {
	return sqs;
};

module.exports = sqs;

const stubgetQueueUrl = sinon.stub(sqs, 'receiveMessage');
stubgetQueueUrl.withArgs({QueueName: 'demoqueue', QueueOwnerAWSAccountId: '123456789111'})
	.yields(undefined, {QueueUrl: `https://sqs.eu-west-1.amazonaws.com/123456789012/demoqueue`});
