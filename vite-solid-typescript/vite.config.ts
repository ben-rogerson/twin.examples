import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  plugins: [
    solid({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
})
