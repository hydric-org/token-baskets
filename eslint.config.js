/* eslint-disable @typescript-eslint/no-require-imports */
/* global require, module */
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    ignores: ["dist", "node_modules", "codegen.ts", "src/**/generated/**"],
  },
  {
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
