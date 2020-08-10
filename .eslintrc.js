module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-duplicate-imports': 'error',
  },
};
