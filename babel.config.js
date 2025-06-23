module.exports = {
  presets: [
    [
      'module:react-native-builder-bob/babel-preset',
      {
        modules: 'commonjs',
        targets: {
          // Target ES2017 for better Hermes compatibility
          node: 'current',
          browsers: ['defaults', 'not ie 11', 'not ie_mob 11'],
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-private-methods',
    // Add plugins for better Hermes compatibility
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: false,
      },
    ],
  ],
};
