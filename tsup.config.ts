import { defineConfig } from 'tsup'

export default defineConfig(({ env }) => {
  return {
    dts: true,
    clean: true,
    outDir: 'dist',
    splitting: false,
    format: ['esm', 'cjs'],
    ignoreWatch: ['dist'],
    entryPoints: ['src/index.ts'],
    define: {
      __DEV__: (env?.NODE_ENV === 'development') + '',
      __TEST__: 'false'
    }
  }
})
