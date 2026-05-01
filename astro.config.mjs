import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://2022211001000413liuxiang.github.io',
  base: '/personal_web',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/blog/tag/') && !page.includes('/blog/category/'),
    }),
  ],
  output: 'static',
});
