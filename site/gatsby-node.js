const Path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [Path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
