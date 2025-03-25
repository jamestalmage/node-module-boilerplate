// For Webstorm Browser Hints Only
import xoTypeScript from 'eslint-config-xo-typescript';

const config = [
	{
		ignores: [
			'eslint.config.js',
			'node_modules',
			'.idea',
			'.tsimp',
			'distribution',
		],
	},
	...xoTypeScript,
];

export default config;
