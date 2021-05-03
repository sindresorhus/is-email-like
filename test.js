import test from 'ava';
import isEmailLike from './index.js';

test('main', t => {
	t.true(isEmailLike('sindresorhus@gmail.com'));
	t.false(isEmailLike('unicorn'));
});
