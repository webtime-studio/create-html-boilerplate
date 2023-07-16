module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-duplicate-imports': 'error',
    'prettier/prettier': 'error',
  },
};
