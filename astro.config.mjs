import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dragline.io',
  compressHTML: true,
  integrations: [sitemap()],
});
