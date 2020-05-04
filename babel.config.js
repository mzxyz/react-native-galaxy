module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          src: './src',
          components: './src/mobile/components',
          reducers: './src/reducers',
          navigator: './src/mobile/navigator',
          middlewares: './src/middlewares',
          utils: './src/utils',
          config: './src/config',
          images: './src/images/',
          _: 'lodash',
        },
      },
    ],
  ],
};
