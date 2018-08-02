export default {
  entry: 'dist/index.js',
  dest: 'dist/dist/index.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.angular-fusioncharts',
  globals: {
    '@angular/core': 'ng.core'
  }
}
