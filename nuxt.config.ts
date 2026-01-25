import { existsSync, mkdirSync, writeFileSync } from "fs";
import { readPublicSubFolders } from "./utils/fun"; // 确保路径正确
import { normalizeInternalHref } from "./utils/url";
import { join } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  hooks: {
    "nitro:init": async (nitro) => {
      nitro.hooks.hook("prerender:done", async () => {
        console.log("开始生成sitemap.xml文件");
        const baseUrl = `https://${process.env.NUXT_PUBLIC_SITE}`;
        const sitemapUrls = await readPublicSubFolders();
        const uriObj = {
          "": 1.0,
          about: 0.6,
          contact: 0.6,
          privacy: 0.6,
        };
        const sitemaps = sitemapUrls.map((uri: string) => {
          const priority = uriObj[uri.split("/")[1] as keyof typeof uriObj] || 0.9;
          return {
            loc: `${baseUrl}${normalizeInternalHref(uri)}`,
            lastmod: new Date().toISOString(),
            changefreq: "weekly",
            priority,
          };
        });
        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${sitemaps
            .map((route) => {
              return `
                <url>
                  <loc>${route.loc}</loc>
                  <changefreq>${route.changefreq}</changefreq>
                  <priority>${route.priority}</priority>
                  <lastmod>${route.lastmod}</lastmod>
                </url>
              `;
            })
            .join("")}
        </urlset>`;
        const publicDir = join(process.cwd(), "public");
        if (!existsSync(publicDir)) mkdirSync(publicDir);
        writeFileSync(join(publicDir, "sitemap.xml"), xmlContent, "utf-8");
        console.log("生成sitemap.xml文件结束");
      });
    },
  },
  ssr: true,
  experimental: {
    inlineSSRStyles: false,
  },
  compatibilityDate: "2025-05-15",
  devtools: {
    enabled: true,
  },
  devServer: {
    host: "0.0.0.0",
    port: 6179,
  },
  nitro: {
    preset: "static", // 静态模式
    prerender: {
      concurrency: 16, // 限制打包SSG任务数量，避免内存溢出
      crawlLinks: true, // 开启爬虫功能，遍历项目中所有服务端渲染的a标签
    },
  },
  modules: [],
  runtimeConfig: {
    public: {
      env: process.env.NUXT_PUBLIC_ENV,
      title: process.env.NUXT_PUBLIC_TITLE,
      description: process.env.NUXT_PUBLIC_DESCRIPTION,
      site: process.env.NUXT_PUBLIC_SITE,
    },
  },
  app: {
    head: {
      title: process.env.NUXT_PUBLIC_TITLE,
      htmlAttrs: {
        lang: "en",
        translate: "yes",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "./logo.png",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-adsense-account",
          content: "ca-pub-6584635184413581",
        },
        {
          name: "description",
          content: process.env.NUXT_PUBLIC_DESCRIPTION,
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
          defer: true,
          crossorigin: "anonymous",
        },
        process.env.NODE_ENV === "development"
          ? {}
          : {
              src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6584635184413581`,
              crossorigin: "anonymous",
              defer: true,
              type: "text/javascript",
            },
        process.env.NODE_ENV === "development"
          ? {}
          : {
              innerHTML: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "uh9pi3oif4");`,
              defer: true,
              type: "text/javascript",
            },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    clearScreen: true, // 启动时清空控制台
    build: {
      minify: "esbuild", // 构建时是否进行代码压缩
      sourcemap: false, // 打包时是否生成 sourcemap 文件
      cssCodeSplit: false, // 关闭 css 代码分割，生成单一样式表方便抓取
      chunkSizeWarningLimit: 100, // 构建时超过这个阈值的文件打包会标黄
      reportCompressedSize: true, // 构建时是否生成 gzip 压缩包
      assetsInlineLimit: 50000, // 10000=10kb，当静态资源小于10kb时候，会被转换为base64打入js文件
    },
  },
  css: ["@/public/app.css"],
});

