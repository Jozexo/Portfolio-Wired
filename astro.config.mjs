// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Base path for GitHub Pages (repo name)
  base: '/Portfolio-Wired',
  // Public site URL (used by some integrations and canonical links)
  site: 'https://Jozexo.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});