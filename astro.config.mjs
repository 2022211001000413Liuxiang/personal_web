import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://2022211001000413liuxiang.github.io',
  base: '/personal_web',
  integrations: [tailwind()],
  output: 'static',
});
