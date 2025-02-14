import test from 'ava';
import unicornFun from '../src/index.js';

test('main', t => {
	t.throws(() => {
		unicornFun(123 as unknown as string);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number',
	});

	t.is(unicornFun('unicorns'), 'unicorns & rainbows');
});
