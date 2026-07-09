// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://raulzarza.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
      filter: (page) =>
        ![
          'https://raulzarza.com/',
          'https://raulzarza.com/developer',
          'https://raulzarza.com/natacion',
        ].includes(page) && !page.includes('/posts'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
