import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueKatex from "vue-katex";
import "katex/dist/katex.min.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(VueKatex);
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
