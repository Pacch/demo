import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/data.ts',
      name: 'data',
      formats: ['es', 'umd'],
      fileName: (format) => `data.${format === 'es' ? 'js' : 'umd.js'}`
    }
  }
})
