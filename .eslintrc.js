module.exports = {
	extends: [
		'airbnb-base',
		'plugin:vue/recommended'
	],
	globals: {
		'require': true,
		'module': true,
		'__dirname': true,
	},
	rules: {
		'no-param-reassign': 'off',
		'import/no-extraneous-dependencies': 'off'
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: 'conf/webpack.common.js'
			}
		}
	}
};