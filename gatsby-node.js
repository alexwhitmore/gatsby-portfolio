const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@components': path.resolve(__dirname, 'src/components'),

        '@sections': path.resolve(__dirname, 'src/components/sections'),
        '@styles': path.resolve(__dirname, 'src/components/sections/styles'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};
