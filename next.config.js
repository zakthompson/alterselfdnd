const composePlugins = require('next-compose-plugins');
const optimizeImages = require('next-optimized-images');

module.exports = composePlugins([
  [
    optimizeImages,
    {
      optimizeImagesInDev: true,
    },
  ],
]);
