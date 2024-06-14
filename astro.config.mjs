import {defineConfig} from 'astro/config';
import preact from '@astrojs/preact';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
    integrations: [
        preact(), mdx(), sitemap()
    ],
    prefetch: true,
    site: "https://tiradas-ipsc.netlify.app"
});
