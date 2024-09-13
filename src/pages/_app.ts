import type { App } from "vue";
import VueLazyLoad from "vue3-lazyload";

export default (app: App) => {
  app.use(VueLazyLoad, {});
};
