export default {
	input: 'dist/index.js',
  external: ['@angular/core'],
  output: {
		file: 'dist/dist/index.js',
		format: 'umd',
    name: 'ng.angular-fusioncharts',
    sourcemap: false,
    globals: {
      '@angular/core': 'ng.core'
    },
	},
}
