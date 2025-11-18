import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@marketmind': path.resolve(dirname, 'src'),
      '@marketmind/*': path.resolve(dirname, 'src/*'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.sb.setup.tsx'],
    coverage: { provider: 'v8', reporter: ['text', 'lcov'] },
  },
})
