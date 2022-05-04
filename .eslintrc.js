module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  globals: {
    describe: true,
    it: true,
    expect: true,
    test: true,
    beforeEach: true,
    afterEach: true,
    beforeAll: true,
    afterAll: true,
  },
};
