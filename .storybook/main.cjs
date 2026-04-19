const path = require("node:path");

const config = {
  framework: {
    name: "@storybook/nextjs",
  },
  stories: ["../packages/ui/src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
  ],
  docs: { autodocs: "tag" },
  viteFinal: async (cfg) => {
    cfg.resolve = cfg.resolve || {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      "@": path.resolve(__dirname, "../apps/web/src"),
      "@marketmind/ui": path.resolve(__dirname, "../packages/ui/src/index.ts"),
    };
    return cfg;
  },
};

module.exports = config;
