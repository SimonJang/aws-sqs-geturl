'use strict';
const AWS = require('aws-sdk');
const pify = require('pify');
const isAwsAccountId = require('is-aws-account-id');

const sqs = new AWS.SQS();
const getQueueUrl = pify(sqs.getQueueUrl.bind(sqs));

module.exports = (queueName, opts) => {
	opts = opts || {};

	if (typeof queueName !== 'string') {
		return Promise.reject(new TypeError(`Expected \`queueName\` to be of type \`string\`, got \`${typeof queueName}\``));
	}
	if (!/^[a-z0-9_-]{1,80}$/i.test(queueName)) {
		return Promise.reject(new TypeError('Invalid queue name'));
	}
	if (opts.awsAccountId && !isAwsAccountId(opts.awsAccountId)) {
		return Promise.reject(new TypeError('Invalid AWS Account Id'));
	}

	return getQueueUrl(
		{
			QueueName: queueName,
			QueueOwnerAWSAccountId: opts.awsAccountId
		}
	)
	.then(data => {
		if (!data || !data.QueueUrl) {
			throw new TypeError(`Queue \`${queueName}\` not found`);
		}
		return data.QueueUrl;
	});
};
