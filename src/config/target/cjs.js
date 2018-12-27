import path from 'path';
const dtsExport = require('../plugins/dts-export');

module.exports = {
  // build config
  tsconfig: {
    "alwaysStrict": true,
    "target": "es6",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "sourceMap": false,
    "baseUrl": ".",
    module: 'esnext'
  },
  js: {
    tsconfig: {
      module: 'esnext',
    },
  },
  dts: {
    tsconfig: {
      module: 'esnext',
      removeComments: true,
    },
    plugins: [dtsExport()],
  },
  babel: {
    presets: [
      ['@babel/env',{
        modules: 'commonjs'
      }]
    ],
    plugins: [
      ['add-module-exports', {
        addDefaultProperty: true
      }]
    ]
  },

  // publish config
  branch: 'publish/cjs',
  packageRewrite: {
    name: 'zan-utils-cjs',
    main: './index.js',
    typings: './index.d.ts',
    scripts: {},
    devDependencies: {},
  }
};
