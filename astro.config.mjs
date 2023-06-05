import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      // Add your components here
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page'
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: "eu" // optional,  or 'eu' (default)
    }
  }), tailwind(), image()]
});