// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'cwxjgr0e',
      dataset: 'production'
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});