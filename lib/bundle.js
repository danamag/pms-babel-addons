require('source-map-support').install({ environment: 'node', hookRequire: true, handleUncaughtExceptions: true })
const path = require('path')
const webpack = require('webpack')

module.exports = (name, entry, dest) => {
	entry = path.resolve(dest, entry || './index.js')
	return new Promise((resolve, reject) => {
		const opts = {
			entry,
			target: 'node',
			externals: [
				function(context, request, callback) {
					if (/^\.(.*)/.test(request) || path.isAbsolute(request)) {
						return callback()
					}
					callback(null, "commonjs " + request)
				}
			],
			output: {
				library: name,
				libraryTarget: 'umd',
				filename: 'prebuilt.js',
				path: dest
			},
			module: {
				rules: [
					{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [ ['@babel/preset-env', { modules: 'commonjs', useBuiltIns: 'usage' } ] ]
							}
						}
					}
			  ]
			},
			resolve: { symlinks: false }
		}

		webpack(opts).run((err, stats) => {
		  if (err || stats.hasErrors()) {
		  	if (err)
			  	console.log(err)
			else {
				if ((((stats || {}).compilation || {}).errors || []).length)
					stats.compilation.errors.forEach(err => {
						console.log(err)
					})
				else
					console.log('Unknown bundling error for module: ' + name)
			}
		  	reject({ errors: true })
		  	return
		  }
		  resolve({ success: true })
		})
	})
}
