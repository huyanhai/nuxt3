export default defineEventHandler(async (event) => {
  const res = await $fetch.raw("http://localhost:3001/health");
  return {
    params: event.context.params?.id,
    res: res._data,
  };
});
