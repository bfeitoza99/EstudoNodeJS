module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },  
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "global-require":"off",
    "import/prefer-default-export":"off",
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
    "linebreak-style": 0,   
    "arrow-body-style": ["error", "always"]
    
  },
};
