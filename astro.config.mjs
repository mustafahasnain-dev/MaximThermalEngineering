// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.maximthermalengg.com',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
});
