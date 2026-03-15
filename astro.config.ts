import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rucherdelagraviere.fr',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
});
