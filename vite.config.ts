import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://me.zakichan.tech',
      dynamicRoutes: [
        '/',
        '/menu',
        '/blog',
        '/about',
        '/work',
        '/blog/football-alert',
        '/blog/being-a-baby-cto',
        '/blog/approach-iot',
        '/blog/zakichan-technologies',
        '/blog/when-you-jump',
        '/blog/prioritize-tasks',
        '/blog/mapbox'
      ]
    })
  ],
})