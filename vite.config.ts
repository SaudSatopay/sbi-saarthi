import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project deploys to GitHub Pages at /sbi-saarthi/ and builds into /docs
// so Pages can serve it directly from the main branch. In dev we serve from
// root so local preview works without the subpath.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sbi-saarthi/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
