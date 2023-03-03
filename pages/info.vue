<template>
  <div>
    {{ data }}
    <div>info 页面</div>
    <NuxtLink to="/">
      <button>返回</button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  title: "通过meta设置的标题",
  layout: "list",
  middleware: "auth",
  validate: (route) => {
    // 控制页面是否显示，为false，页面则显示404
    return true;
  },
});

useServerSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

useHead({
  //   title: "详情页",
  title: route.meta.title as string, // 通过meta获取title
  bodyAttrs: {
    class: "info",
  },
  link: [
    // 添加样式
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
  script: [
    // 添加脚本
    // {
    //   src: "https://third-party-script.com",
    //   body: true, // 放到body后面
    // },
  ],
});

const { data } = await useFetch(() => "/api/show/2", {
  //   baseURL: "xxx",
  body: "12ww",
  headers: {
    cus: "123s",
  },
  params: { id: 1 },
  query: {
    ids: 1,
  },
});

// console.log("show data", data);
</script>
