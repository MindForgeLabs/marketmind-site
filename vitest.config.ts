// D:\marketmind\web\vitest.config.ts
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const dirname =
    typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const uiPath = path.resolve(dirname, 'packages/ui/src/index.ts')
const domainPath = path.resolve(dirname, 'packages/domain/src/index.ts')

export default defineConfig({
    root: dirname,
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@marketmind/domain', replacement: domainPath },
            { find: '@marketmind/ui', replacement: uiPath },
            { find: '@', replacement: path.resolve(dirname, 'apps/web/src') },
            { find: '@/*', replacement: path.resolve(dirname, 'apps/web/src/*') },
            { find: '@marketmind', replacement: path.resolve(dirname, 'apps/web/src') },
            { find: '@marketmind/*', replacement: path.resolve(dirname, 'apps/web/src/*') },
        ],
    },
    test: {
        include: [
            'apps/web/src/**/*.test.{ts,tsx}',
            'packages/ui/src/**/*.test.{ts,tsx}',
        ],
        environment: 'jsdom',
        globals: true,
        setupFiles: [path.resolve(dirname, 'apps/web/vitest.setup.tsx')],
        coverage: { provider: 'v8', reporter: ['text', 'lcov'] },
    },
})
