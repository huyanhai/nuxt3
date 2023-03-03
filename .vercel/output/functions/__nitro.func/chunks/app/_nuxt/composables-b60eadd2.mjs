import { u as useNuxtApp } from '../server.mjs';
import { useSeoMeta } from '@unhead/vue';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const useServerSeoMeta = (meta) => {
  {
    return useSeoMeta(meta);
  }
};

export { useHead as a, useServerSeoMeta as u };
//# sourceMappingURL=composables-b60eadd2.mjs.map
