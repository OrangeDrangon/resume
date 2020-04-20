module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "google",
    "plugin:editorconfig/noconflict",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn"
  },
};
