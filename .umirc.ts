import { defineConfig } from 'dumi';

export default defineConfig({
  history: {
    type: 'hash',
  },
  title: 'react-flow-builder',
  favicon: '/bytedance.ico',
  logo: '/bytedance.ico',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
