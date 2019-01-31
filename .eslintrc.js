module.exports = {
	extends: [
		'airbnb-base',
		'plugin:vue/recommended'
	],
	rules: {
		'no-param-reassign': 'off'
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: 'webpack.config.js'
			}
		}
	}
};