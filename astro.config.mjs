import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://username.github.io',
  integrations: [tailwind()],
  output: 'static',
});
