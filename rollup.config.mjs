export default {
  input: "dist/index.js",
  output: {
    file: 'dist/dist/index.js',
    format: 'cjs'
  },
  sourceMap: false,
  format: "umd",
  moduleName: "ng.angular-fusioncharts",
  globals: {
    "@angular/core": "ng.core",
  },
};
