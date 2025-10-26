import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set `base` to your GitHub repository name so built assets use the correct
// path when you host the site at https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/digioptimized/',
  plugins: [react()],
})
