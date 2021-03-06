module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-readdign": "off",
    "camelcase": "off",
    "no-console": "off",
    "no-return-await": "off",
    "func-names": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};
