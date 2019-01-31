module.exports = {
	extends: [
		'airbnb-base',
		'plugin:vue/recommended'
	],
	rules: {},
	settings: {
		'import/resolver': {
			webpack: {
				config: 'webpack.config.js'
			}
		}
	}
};