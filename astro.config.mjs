import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(),
	site: 'https://este-blog.vercel.app/',
	integrations: [mdx(), sitemap()],
});
