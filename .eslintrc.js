module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: '@react-native-community',
  plugins: ['prettier'], // Add Prettier plugin
  rules: {
    'prettier/prettier': [
      'error',
      {
        // Configure Prettier options
        endOfLine: 'auto', // Ensure consistent end of lines
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2020, // Use ES2020 syntax
    sourceType: 'module', // Use ECMAScript modules
    ecmaFeatures: {
      tsx: true, // Enable JSX
    },
  },
};
