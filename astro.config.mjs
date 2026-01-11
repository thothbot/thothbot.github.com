import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thothbot.github.io',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['three', 'gsap']
    }
  }
});
