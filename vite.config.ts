import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Worktree is 3 levels deep inside the project root (.claude/worktrees/<name>).
      // Allow Vite to serve node_modules from the project root.
      allow: ['../../..'],
    },
  },
})
