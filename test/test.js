import test from 'ava';
import './fixtures/fake-sqs'; // eslint-disable-line import/no-unassigned-import
import m from '../';

test('error no queue name', t => {
	t.throws(m(), 'Expected `queueName` to be of type `string`, got `undefined`');
});

test('invalid queue name test', t => {
	t.throws(m('l[7777&&]l'), 'Invalid queue name');
});

test('invalid queue not found test', async t => {
	t.throws(m('trolololo', {awsAccountId: '123456789111'}), 'Queue `trolololo` not found');
});

test('getting queue url', async t => {
	const url = await m('demoqueue', {awsAccountId: '123456789111'});
	t.is(url, 'https://sqs.eu-west-1.amazonaws.com/123456789111/demoqueue');
});

test('getting queue url without AWS account id', async t => {
	const url = await m('demoqueue');
	t.is(url, 'https://sqs.eu-west-1.amazonaws.com/123456789111/demoqueue');
});
