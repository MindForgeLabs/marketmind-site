// D:\marketmind\web\.storybook\main.ts
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname =
    typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// No type import from '@storybook/nextjs' -> avoids TS "cannot find module" noise
const config = {
    framework: {
        name: '@storybook/nextjs',
        // options: { builder: { name: '@storybook/builder-vite' } }, // optional
    },
    stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        '@storybook/addon-vitest',
    ],
    docs: { autodocs: 'tag' },
    viteFinal: async (cfg) => {
        cfg.resolve = cfg.resolve || {}
        cfg.resolve.alias = {
            ...(cfg.resolve.alias || {}),
            '@marketmind': path.resolve(dirname, '../src'),
            '@marketmind/*': path.resolve(dirname, '../src/*'),
        }
        return cfg
    },
}

export default config
