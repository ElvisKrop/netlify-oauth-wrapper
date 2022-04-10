module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "comma-spacing": ["error", { before: false, after: true }],
    "prettier/prettier": "error",
    "no-process-env": "off",
    "no-duplicate-imports": "error",
  },
}
