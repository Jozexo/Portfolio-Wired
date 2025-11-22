// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Base path para GitHub Pages (usar minúsculas y barra final)
  base: '/Portfolio-Wired/',
  // URL pública completa del sitio (incluye el repo)
  site: 'https://jozexo.github.io/portfolio-wired',
  vite: {
    plugins: [tailwindcss()]
  }
});