import { defineEventHandler } from 'h3';

const _id_ = defineEventHandler(async (event) => {
  var _a;
  const res = await $fetch.raw("http://localhost:3001/health");
  return {
    params: (_a = event.context.params) == null ? void 0 : _a.id,
    res: res._data
  };
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
