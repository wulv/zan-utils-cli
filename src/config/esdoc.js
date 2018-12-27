const base = require('./base');
import path from 'path';

module.exports = {
  source: base.esTemp,
  package: './package.json',
  index: './README.md',
  destination: 'docs',
  plugins: [
    {
      name: 'esdoc-coverage-plugin',
      option: {
        enable: true,
        kind: ['class', 'method', 'member', 'get', 'set', 'constructor', 'function', 'variable'],
      },
    },
    {
      name: 'esdoc-brand-plugin',
      option: {
        title: '有赞工具函数库',
        description: '有赞工具函数库',
        repository: 'https://github.com/wulv/zan-utils.git',
        site: 'wulv.github.io/zan-utils',
        author: 'wulv@youzan.com',
      },
    },
    {
      name: 'esdoc-importpath-plugin',
      option: {
        replaces: [{ from: 'es_temp/', to: '' }],
      },
    },
    {
      name: 'esdoc-publish-html-plugin',
      option: {
        template: path.join(base.curCwd, 'template'),
      },
    },
    {
      name: 'esdoc-standard-plugin',
    },
  ],
};
