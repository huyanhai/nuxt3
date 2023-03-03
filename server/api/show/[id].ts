export default defineEventHandler(async (event) => {
  const res = await $fetch.raw("https://www.baidu.com");
  return {
    params: event.context.params?.id,
    res: res._data,
  };
});
