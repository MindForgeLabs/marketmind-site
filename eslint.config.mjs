import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Hard ignores to ensure ESLint never walks build artifacts or non-code docs
  {
    // Flat-config native ignores (supersedes .eslintignore)
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/out/**",
      "**/build/**",
      "**/storybook-static/**",
      "**/*.json",
      "**/*.md",
      "**/*.mdx",
      "next-env.d.ts",
    ],
  },
  ...nextVitals,
  ...nextTs,
  // Global ignores to prevent walking build artifacts or caches
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "coverage/**",
    "storybook-static/**",
    "next-env.d.ts",
  ]),
  // Settings and scope adjustments
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Apply React rules only to code files, never to JSON or other assets
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {},
  },
]);

export default eslintConfig;
