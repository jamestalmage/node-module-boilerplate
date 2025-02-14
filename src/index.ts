export type Options = {postfix?: string};

export default function unicornFun(input: string, {postfix = 'rainbows'} = {}) {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
}
