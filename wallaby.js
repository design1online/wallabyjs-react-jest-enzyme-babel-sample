module.exports = function (wallaby) {
  return {

    files: [
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      {pattern: 'node_modules/jest-enzyme/src/index.js', instrument: false},
      'assets/**',
      'src/**'
    ],

    tests: [
      'test/**/*Spec.jsx'
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },
    env: {
      type: 'node',
      runner: 'node',
    },

    setup: function () {
      require('babel-register')();

      var jsdom = require('jsdom').jsdom;

      var exposedProperties = ['window', 'navigator', 'document'];

      global.document = jsdom('');
      global.window = document.defaultView;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          exposedProperties.push(property);
          global[property] = document.defaultView[property];
        }
      });

      global.navigator = {
        userAgent: 'node.js'
      };

      documentRef = document;
    }
  };
};
