export default {
  input: "dist/index.js",
  output: {
    file: 'dist/dist/index.js',
    format: 'cjs'
  },
  sourceMap: false,
  globals: {
    "@angular/core": "ng.core",
  },
};
