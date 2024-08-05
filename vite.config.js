import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      srcDir: 'src',
      filename: 'service-worker.js',
      manifest: {
        name: 'React SpaceTripp',
        short_name: 'SpaceTripp',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        description: 'STH using PWA',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  publicDir: 'public',
  assetsInclude: ['**/*.html', '**/*.pdf', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.wav', '**/*.mp3'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html', // Ensure this points to your index.html
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
  },
  server:{port: 3000}
})
