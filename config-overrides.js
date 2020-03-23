const CopyWebpackPlugin = require('copy-webpack-plugin');
const {override, fixBabelImports, addLessLoader, addDecoratorsLegacy, disableEsLint} = require('customize-cra');


function myOverrides(config, env) {
  // do stuff to config
  if (!config.plugins) {
      config.plugins = [];
  }

  config.plugins.push(
      (process.env.NODE_ENV === 'production') ?
      new CopyWebpackPlugin([{from: './main.js'}]) :
      new CopyWebpackPlugin([{from: './main.js', to: 'dist'}])
  );
  return config
}

module.exports = override(
  myOverrides,
  addDecoratorsLegacy(),
  disableEsLint(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#a50052'},
  }),
);
