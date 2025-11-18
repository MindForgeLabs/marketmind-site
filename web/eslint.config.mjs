// Flat ESLint config for Next.js + TypeScript + React (ESLint 9)
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import jsonPlugin from "@eslint/json";
import next from "eslint-config-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore generated and external folders
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/.storybook-static/**",
      "**/package-lock.json",
    ],
  },

  // Base JS/TS config
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react: reactPlugin,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      next,
      reactPlugin.configs.flat.recommended,
    ],
    rules: {
      // React 17+ / Next.js: React in scope is not required
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // Using TypeScript for type checking instead of PropTypes
      "react/prop-types": "off",
      // Allow styled-jsx attribute commonly used in Next.js examples
      "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
    },
  },

  // JSON files (lint only project JSON, not .next)
  {
    files: ["**/*.json"],
    plugins: { json: jsonPlugin },
    language: "json/json",
    extends: [jsonPlugin.configs.recommended],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json: jsonPlugin },
    language: "json/jsonc",
    extends: [jsonPlugin.configs.recommended],
  },
  {
    files: ["**/*.json5"],
    plugins: { json: jsonPlugin },
    language: "json/json5",
    extends: [jsonPlugin.configs.recommended],
  },
]);
