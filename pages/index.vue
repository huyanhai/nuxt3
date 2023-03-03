<template>
  <div>
    <p class="tw-text-red-600">首页</p>
    <AppAlert>alert info</AppAlert><br />
    <NuxtLink to="/info">go info</NuxtLink>
    <button @click="changePageLayout">改变布局</button>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

definePageMeta({
  layout: "default",
});

const layout = ref("default");

const changePageLayout = () => {
  layout.value = layout.value === "default" ? "list" : "default";
  setPageLayout(layout.value);
};
</script>
