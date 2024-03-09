module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "react-app",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        arrowParens: "always",
        semi: false,
        trailingComma: 2,
        endOfLine: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
      },
    ],
  },
};
